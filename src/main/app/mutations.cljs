(ns app.mutations
  (:require [com.fulcrologic.fulcro.mutations :as m :refer [defmutation]]
            [com.fulcrologic.fulcro.algorithms.merge :as merge]))

(defmutation delete-person
  "Mutation: Deleta a pessoa com 'name'da lista com 'list-name'"
  [{list-id   :list/id
    person-id :person/id}] 
  (action [{:keys [state]}] 
            (swap! state merge/remove-ident* [:person/id person-id] [:list/id list-id :list/people])))