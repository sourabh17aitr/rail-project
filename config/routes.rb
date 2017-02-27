Rails.application.routes.draw do
  root 'web_page#index'

 # get 'web_page/contact'

 # get 'web_page/brands'

 # get 'web_page/services'

 # get 'web_page/single'


    get  '/brands',  to: 'web_page#brands'
    get  '/about',   to: 'web_page#index'
 	get  '/contact', to: 'web_page#contact'
 	get '/submit' ,  to: 'web_page#index'
 	get '/shopNow' ,  to: 'web_page#single'

	#root 'application#hello'

	resources "contacts", only: [:new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
