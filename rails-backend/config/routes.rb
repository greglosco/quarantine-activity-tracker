Rails.application.routes.draw do
  resources :livestreams
  resources :hobbies
  resources :recipes
  resources :fitness_activities
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
