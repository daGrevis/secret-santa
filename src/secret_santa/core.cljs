(ns secret-santa.core
  (:require [reagent.core :as reagent :refer [atom]]))

(defn in? [coll x]
  (not (nil? (some #(= x %) coll))))

(defn get-pairs! [people pairs-banned]
  (loop []
    (let [pairs (zipmap people (shuffle people))]
      (if (nil? (some (fn [[person-a person-b]]
                        (or (= person-a person-b)
                            (in? pairs-banned [person-a person-b])
                            (in? pairs-banned [person-b person-a])))
                      pairs))
        pairs
        (recur)))))

(def people (atom (sorted-map 1 "foo" 2 "bar" 3 "fizz" 4 "buzz")))
(def people-counter (atom (count @people)))
(def pairs-banned (atom (sorted-map 1 ["foo" "bar"] 2 ["fizz" "buzz"])))
(def pairs-banned-counter (atom (count @pairs-banned)))
(def pairs (atom nil))

(defn remove-person-component [id]
  [:a {:class "remove"
       :on-click #(swap! people dissoc id)}
   "[x]"])

(defn people-list-component []
  [:ul (for [[id person] @people]
         ^{:key id}
         [:li person [remove-person-component id]])])

(defn people-form-component []
  (let [person (atom "")]
    (fn []
      [:form {:on-submit (fn [e]
                           (.preventDefault e)
                           (when (not= @person "")
                             (swap! people assoc (swap! people-counter inc) @person)
                             (reset! person "")))}
       [:input {:type "text"
                :value @person
                :on-change #(reset! person (.. % -target -value))}]
       [:button "Add person"]])))

(defn remove-banned-pair-component [id]
  [:a {:class "remove"
       :on-click #(swap! pairs-banned dissoc id)}
   "[x]"])

(defn pairs-banned-list-component []
  [:ul (for [[id [a b]] @pairs-banned]
         ^{:key id}
         [:li a " -> " b [remove-banned-pair-component id]])])

(defn pairs-banned-form-component []
  (let [person-a (atom "")
        person-b (atom "")]
    (fn []
      [:form {:on-submit (fn [e]
                           (.preventDefault e)
                           (when (and (not= @person-a "")
                                      (not= @person-b ""))
                             (swap! pairs-banned assoc (swap! pairs-banned-counter inc) [@person-a @person-b])
                             (reset! person-a "")
                             (reset! person-b "")))}
       [:input {:type "text"
                :value @person-a
                :on-change #(reset! person-a (.. % -target -value))}]
       [:input {:type "text"
                :value @person-b
                :on-change #(reset! person-b (.. % -target -value))}]
       [:button "Add banned pair"]])))

(defn pairs-component []
  [:ul (for [[person-a person-b] @pairs]
         ^{:key [person-a person-b]}
         [:li person-a " gives to " person-b])])

(defn root-component []
  [:div
   [:h1 "Secret Santa"]

   [people-list-component]
   [people-form-component]
   [:p "People: " (count @people)]

   [pairs-banned-list-component]
   [pairs-banned-form-component]
   [:p "Pairs banned: " (count @pairs-banned)]

   [:hr]

   [:button {:on-click #(reset! pairs (get-pairs! (vals @people) (vals @pairs-banned)))}
    "Recalculate pairs"]
   [pairs-component]])

(reagent/render-component [root-component] (.-body js/document))
