100.times do
  Dish.create(
    name: Faker::Beer.name,
    price: Faker::Commerce.price.to_f,
  )
end