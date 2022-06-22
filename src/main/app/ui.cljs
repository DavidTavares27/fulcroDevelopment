(ns app.ui
  (:require
   [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
   [com.fulcrologic.fulcro.dom :as dom]
   [app.mutations :as api]))

(defsc Pokemon [this {:pokemon/keys [name url]}]
  {:query [:pokemon/name :pokemon/url]
   :ident  :pokemon/name}
  (dom/div
   (dom/h2 name)
   (dom/a {:href url} "detalhes")))

(def ui-pokemon (comp/factory Pokemon {:keyfn :pokemon/name}))

(defsc PokemonList [this list]
  {:query [{:pokemons/list (comp/get-query Pokemon)}]})







(defsc Person [this {:person/keys [id name age] :as props} {:keys [onDelete]}]
  {:query         [:person/id :person/name :person/age]
   :ident         :person/id
   :initial-state (fn [{:keys [id name age] :as params}] {:person/id id :person/name name :person/age age})}
  (dom/li
   (dom/h5 (str name " (idade: " age ")") (dom/button {:onClick #(onDelete id)} "Excluir"))))

(def ui-person (comp/factory Person {:keyfn :person/id}))

(defsc PersonList [this {:list/keys [id label people] :as props}] 
  {:query [:list/id :list/label {:list/people (comp/get-query Person)}]
   :ident :list/id
   :initial-state
   (fn [{:keys [id label]}]
       {:list/id id
        :list/label label
        :list/people (if (= id :friends)
                     [(comp/get-initial-state Person {:id 1 :name "Ana" :age 22})
                      (comp/get-initial-state Person {:id 2 :name "João" :age 24})]
                     [(comp/get-initial-state Person {:id 3 :name "Paula" :age 20})
                      (comp/get-initial-state Person {:id 4 :name "Pedro" :age 21})])})}
  (let [delete-person (fn [person-id] (comp/transact! this [(api/delete-person {:list/id id :person/id person-id})]))]
  (dom/div 
   (dom/h4 label)
   (dom/ul
    (map #(ui-person (comp/computed % {:onDelete delete-person})) people)))))

(def ui-person-list (comp/factory PersonList))

(defsc Root [this {:keys [friends opponents]}]
 {:query         [{:friends   (comp/get-query PersonList)}
                  {:opponents (comp/get-query PersonList)}]
  :initial-state (fn [params] {:friends   (comp/get-initial-state PersonList {:id :friends :label "Friends"})
                               :opponents (comp/get-initial-state PersonList {:id :opponents :label "Opponents"})})}
  (dom/div
   (ui-person-list friends)
   (ui-person-list opponents)))


