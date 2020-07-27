Rails.application.routes.draw do
root to: 'sudokues#new'
resources :sudokues 
end
