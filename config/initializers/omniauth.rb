Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, 'Z4Y6sdGLxFqVG6YmvqPQ', 'AvYuZYyKQNnhIVpFNOhyhk8HPy1WpMSu1fTaBow'
  provider :github, '6dcef831c816afcc17c3', '5e471d26902f7ec244fde98dcc1f3b996443429c'
end
