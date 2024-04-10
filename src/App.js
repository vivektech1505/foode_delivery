import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import React from 'react';




function App() {
  const [product, setProduct] = useState([
    {
      url : 'https://img.spoonacular.com/recipes/640461-556x370.jpg',
      name : "Crawfish Cake Sl",
      description: 'In a saute pan heat 1 teaspoon oil, add chopped onion, red pepper and celery and cook until tender, about 2-3 minutes. Remove pan from heat and add garlic, crawfish meat, and 1 teaspoon Creole spice (or to taste). Transfer to a mixing bowl and set aside to cool. Mix in egg and enough bread crumbs for mixture to bind; adjust seasonings to taste with salt, pepper and Creole spice. Form into 8 equal patties and flatten to 3/4-inch thick. Heat remaining oil in a saute pan and cook cakes on both sides until brown and crispy. Serve with a dollop of tartar sauce.',
      summeryName : "Summary",
      Summary : "Crawfish Cake Sliders might be a good recipe to expand your hor d'oeuvre recipe box. Watching your figure? This dairy free and pescatarian recipe has 188 calories, 10g of protein, and 7g of fat per serving. This recipe serves 8. For 65 cents per serving, this recipe covers 8% of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes around 45 minutes. This recipe from Foodista has 15 fans. Head to the store and pick up oil, slider buns, onion, and a few other things to make it today. With a spoonacular score of 30%, this dish is rather bad. Similar recipes include Cajun Crawfish Sliders, Crawfish Jalapeno Cheese Cornbread topped with Crawfish Etouffee, and Salmon Cake Sliders."
    },
    {
      url : 'https://img.spoonacular.com/recipes/640383-556x370.jpg',
      name : "Cranberry Margar",
      description: "In a saucepan over medium heat, melt the cup of sugar in the orange juice. Add the cranberries, reserving some for the skewers, and cook over low heat for 10 minutes. Set aside and let it cool. Blend cranberries in a blender, then strain to make the puree",
      summeryName : "Summary",
      Summary : "Cranberry Margarita takes about 1 hour from beginning to end. One portion of this dish contains approximately 1g of protein, 0g of fat, and a total of 379 calories. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs $3.55 per serving. It works well as a rather expensive beverage. It is brought to you by Foodista. 29 people have tried and liked this recipe. Head to the store and pick up cranberries, grand marnier, karo syrup, and a few other things to make it today. All things considered, we decided this recipe deserves a spoonacular score of 20%. This score is not so amazing. Similar recipes include Cranberry Margarita, Cranberry Margarita, and Cranberry Margarita."
    },
    {
      url : 'https://img.spoonacular.com/recipes/636632-556x370.jpg',
      name : "Buttery Pull Apa",
      description : "Combine scalded milk, mashed potatoes, shortening, sugar and salt in a large mixing bowl and let stand until lukewarm. Add one package of yeast (softened in 1/2 cup lukewarm water). Add two well-beaten eggs and 1 1/2 cups flour. Beat well. Add about four more cups of sifted flour to make stiff dough. Put in a large greased bowl and turn so that all of the dough is greased. Let rise at least two hours. About 1 1/2 hours before serving, punch down and roll out dough. Cut into walnut-sized squares and dip each into melted butter, then pile in fluted tube pan. Pour remaining butter over top. Let rise (about one hour) then bake 20-25 minutes at 375 degrees F (If crispier bread desired, cook at 400 degrees F) Serve hot.",
      summeryName : "Summary",
      Summary : "Buttery Pull Apart Monkey Bread might be just the dessert you are searching for. This recipe makes 16 servings with 397 calories, 6g of protein, and 22g of fat each. For 34 cents per serving, this recipe covers 9% of your daily requirements of vitamins and minerals. 9 people found this recipe to be tasty and satisfying. This recipe from Foodista requires water, yeast, salt, and sugar. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 32%. This score is not so super. Try Buttery Monkey Bread, Mini Apple Pull Apart Monkey Bread, and Pull Apart Apple Fritter Monkey Bread for similar recipes."
      
    },
    {
      url : 'https://img.spoonacular.com/recipes/642597-556x370.jpg',
      name : "Farro & Leek Sou",
      description : "In a heavy bottomed pot, heat olive oil on med/low heat. Add in the vegetables and sweat until translucent and soft WITHOUT browning. If the vegetables stick to the pan, lower the heat & add a spoonful of water. Then toss in the farro, toasting with the vegetables for 1-2 minutes. Add in the herbs & stock. Season with salt & pepper. Then Bring up to a low simmer and continue to simmer for 30-40 minutes until the farro is tender. You can control the consistency of the soup: to make it more 'stewy' hold back a little stock, and the contrary if you like it 'soupy,' add a bit more stock. Drizzle with extra virgin olive oil, sprinkle of Parmesan cheese and serve with toasty bread.",
      summeryName : "Summary",
      Summary : "The recipe Farro & Leek Soup can be made in around 45 minutes. One portion of this dish contains roughly 50g of protein, 12g of fat, and a total of 661 calories. This recipe serves 4. For $6.61 per serving, this recipe covers 38% of your daily requirements of vitamins and minerals. If you have tablespoons olive oil, leeks, carrot, and a few other ingredients on hand, you can make it. Autumn will be even more special with this recipe. 8 people were impressed by this recipe. It works well as a pricey main course. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 87%, which is super. If you like this recipe, take a look at these similar recipes: Farro & Leek Soup, Sweet Corn, Goudan and Farro Risotto Plus 15 More Farro s You’ll Love Forever, and Farro Soup with Chorizo."
    },
    {
      url : 'https://img.spoonacular.com/recipes/715562-556x370.jpg',
      name : "Loaded Baked Pot",
      description : "Place a large pot of water on the stove and add in the peeled and cubed potatoes. Get the water up to a boil, and then boil for 20 minutes, or until potatoes are cooked. Remove from heat and drain water. Place to the side.",
      summeryName : "Summery",
      Summary : "Loaded Baked Potato Soup might be just the main course you are searching for. This recipe serves 8. One portion of this dish contains about 21g of protein, 35g of fat, and a total of 624 calories. For $1.29 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. 5743 people found this recipe to be flavorful and satisfying. Autumn will be even more special with this recipe. If you have bacon bits, cream, onion, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly 1 hour. It is brought to you by Pink When. All things considered, we decided this recipe deserves a spoonacular score of 82%. This score is awesome. Loaded Baked Potato Soup with Crispy-Fried Potato Skins, Loaded Baked Potato Soup with Crispy-Fried Potato Skins, and Loaded Baked Potato Soup with Crispy-Fried Potato Skins are very similar to this recipe."
    },
    {
      url : 'https://img.spoonacular.com/recipes/634180-556x370.jpg',
      name : "Banana Smoothie ",
      description : "Mix everything but shaved chocolate up in a blender. pour into glass and sprinkle chocolate on top.",
      summeryName : "Summary",
      Summary : "Banana Smoothie Boost is a gluten free recipe with 4 servings. One portion of this dish contains roughly 1g of protein, 1g of fat, and a total of 43 calories. For 16 cents per serving, this recipe covers 2% of your daily requirements of vitamins and minerals. A mixture of almond milk, banana, coffee, and a handful of other ingredients are all it takes to make this recipe so delicious. Not a lot of people really liked this breakfast. 3 people found this recipe to be scrumptious and satisfying. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 23%. This score is not so excellent. Users who liked this recipe also liked Banana Smoothie Boost, Blueberry Brain Boost Smoothie, and Immune Boost Week: Kale And Berry Smoothie."
    },
    {
      url : 'https://img.spoonacular.com/recipes/649611-556x370.jpg',
      name : "Lemon Delicious",
      description : "Preheat oven to 180C. Lightly grease 4 ramekins (you can use a smaller ramekins) Place flour, sugar and lemon zest in a large mixing bowl and whisk to combine. Make a well in the centre and pour in lemon juice and melted butter. Stir to combine, add egg yolks and mix well. Stir in milk. In a separate clean small bowl of an electric mixer (I used my Kitchen Aid mixer), whisk egg whites until stiff. Fold egg whites into batter and divide mixture evenly between ramekins. Place ramekins in a large roasting dish (I used a square cake pan), filled with cold water to come halfway up the sides of the ramekins and bake for 30-35 minutes until golden. Good to serve warm.",
      summeryName : "Summary",
      Summary : "Lemon Delicious takes around 45 minutes from beginning to end. For 71 cents per serving, you get a side dish that serves 4. One serving contains 232 calories, 6g of protein, and 12g of fat. It is brought to you by Foodista. 5 people were glad they tried this recipe. It is a good option if you're following a lacto ovo vegetarian diet. A mixture of self raising flour, caster sugar, egg whites, and a handful of other ingredients are all it takes to make this recipe so scrumptious. All things considered, we decided this recipe deserves a spoonacular score of 19%. This score is rather bad. If you like this recipe, you might also like recipes such as Delicious Lemon Cake, Lemon Delicious Pudding, and Lemon Delicious Puddings."
    },
    {
      url : 'https://img.spoonacular.com/recipes/663588-556x370.jpg',
      name : "Tomato Cutlets",
      description : "Heat a large frying pan with the olive oil and place the prepared tomato slices in the pan. When the tomatoes have a nice golden color gently flip and finish cooking on the other side. This will take about 3-4 minutes on each side on medium heat.",
      summeryName : "Summary",
      Summary : "You can never have too many side dish recipes, so give Tomato Cutlets a try. This recipe serves 5. One portion of this dish contains about 15g of protein, 17g of fat, and a total of 305 calories. For $2.98 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. This recipe from Foodista requires salt, juice of lemon, olive oil, and eggs. 19 people were glad they tried this recipe. From preparation to the plate, this recipe takes about 45 minutes. Overall, this recipe earns an excellent spoonacular score of 88%. Chicken Cutlets with Tomato Sauté, Turkey Cutlets with Tomato Sauce, and Tomato-and-Garlic-Stuffed Chicken Cutlets are very similar to this recipe."
    },
    {
      url : 'https://img.spoonacular.com/recipes/642614-556x370.jpg',
      name : "Fast Tiramisu",
      description : "Heat a large pan over medium-high heat and add the 2 tablespoons of olive oil. Once the oil is hot, add the onions and saut until they begin to brown. Add the tomatoes and remaining salt and saut until they begin to wilt, about 20 to 30 seconds. Add the spinach and saut just until it wilts but remains bright green. Finally, stir the pine nuts into the vegetable mixture and remove the pan from the heat. Season with salt and pepper to taste.",
      summeryName : "Summary",
      Summary : "You can never have too many main course recipes, so give Spinach, Tomato & Onion Couscous a try. One serving contains 565 calories, 18g of protein, and 24g of fat. This recipe serves 3. For $3.61 per serving, this recipe covers 28% of your daily requirements of vitamins and minerals. 8 people were impressed by this recipe. It is a good option if you're following a lacto ovo vegetarian diet. Head to the store and pick up spinach, olive oil, onion, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes about 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 91%. This score is spectacular. Users who liked this recipe also liked Roasted Garlic Couscous with Tomatoes, Dill, Onion, and Spinach, Fetan and Green Onion Couscous Cakes over Tomato-Olive Salad, and Lamb Chops with Spinach Tomato Couscous."
    },
    {
      url : 'https://img.spoonacular.com/recipes/664311-556x370.jpg',
      name : "Vanilla Cream Ca",
      description : " Add white wine to pan and cover to steam. After about 2 minutes, much of the wine will have evaporated. Add the chicken stock gradually. Allow the filets to steam for another couple of minutes. Then add the lime juice. When bubbling and both filets are opaque all the way through, add the green onions to the pan and swirl in the sauce for a moment.",
      summeryName : "Summary",
      Summary : "Cilantro Lime Halibut might be a good recipe to expand your main course recipe box. This recipe serves 2. One portion of this dish contains roughly 44g of protein, 22g of fat, and a total of 422 calories. For $8.81 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. This recipe from Foodista requires chicken stock, juice of lime, green onions, and salt and pepper. 19 people found this recipe to be delicious and satisfying. From preparation to the plate, this recipe takes around 45 minutes. It is a good option if you're following a gluten free, dairy free, paleolithic, and primal diet. Overall, this recipe earns an outstanding spoonacular score of 95%. Similar recipes are Cilantro-Ginger Halibut, Cilantro-Ginger Halibut, and Halibut With Citrus And Cilantro.",
    }, 
    {
      url : 'https://img.spoonacular.com/recipes/663092-556x370.jpg',
      name : "Thai Coconut Cur",
      description : "Wash the dandelion well in a solution of water and raw cider vinegar, using a couple of tablespoons of vinegar to about a litre of water. Wash and spin dry all the greens. Pop all the ingredients into a pestle and mortar or food processor and pound/blitz till nearly smooth - I like to leave a little texture to my pesto but play around with it. And that's it! Pretty simple and very scrummy.",
      summeryName : "Summery",
      Summary : "If you want to add more gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipes to your repertoire, Dandelion pesto might be a recipe you should try. For 59 cents per serving, this recipe covers 6% of your daily requirements of vitamins and minerals. This recipe serves 4. This condiment has 144 calories, 1g of protein, and 15g of fat per serving. 103 people have tried and liked this recipe. If you have macadamia nuts, basil leaves, sea salt, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. With a spoonacular score of 62%, this dish is pretty good. If you like this recipe, take a look at these similar recipes: Dandelion Pesto, Dandelion Pumpkin Seed Pesto, and Almond Herb Tarts With Dandelion Pesto, Truffled Fontina & Figs."
    },
    {
      url : 'https://img.spoonacular.com/recipes/632660-556x370.jpg',
      name : "Apricot Glazed A",
      description : "Cook the quinoa according to package directions. Preheat the oven to 400 F Cut head of cauliflower into florets. Toss with olive oil, salt and pepper and place on a baking sheet. Roast cauliflower for 20 minutes or until tender. Meanwhile, crumble the cheese and chop the rest of the ingredients. Mix them all together, sprinkle with some extra virgin olive oil and juice from 1/2 a lemon season to taste. Serve warm or cold.",
      summeryName : "Summary",
      Summary : "Red Quinoan and Roasted Cauliflower Salad could be just the gluten free and lacto ovo vegetarian recipe you've been looking for. This main course has 444 calories, 13g of protein, and 26g of fat per serving. For $2.26 per serving, this recipe covers 28% of your daily requirements of vitamins and minerals. This recipe serves 4. Head to the store and pick up apricots, parsley, walnuts, and a few other things to make it today. 2 people were glad they tried this recipe. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is outstanding. If you like this recipe, you might also like recipes such as Roasted Cauliflower and Quinoa Salad, CURRY ROASTED CAULIFLOWER & QUINOA SALAD, and CURRY ROASTED CAULIFLOWER & QUINOA SALAD."
    },
    {
      url : 'https://img.spoonacular.com/recipes/632660-556x370.jpg',
      name : "Apricot Glazed A",
      description : "In a food processor, pulse 1 1/2 cups of the flour with the salt. Add the cold butter and process just until the butter is the size of peas, about 5 seconds. Sprinkle the ice water over the mixture and process just until moistened, about 5 seconds. Transfer the dough to a lightly floured work surface and knead 2 or 3 times, just until it comes together. Pat the dough into a disk. On a lightly floured work surface, roll out the dough into a 16- to 17-inch round about 1/4 inch thick. Line a large baking sheet with parchment paper. Roll the dough around the rolling pin and unroll it onto the prepared baking sheet. In a small bowl, combine 2 tablespoons of the sugar with the remaining 1 tablespoon of flour and sprinkle over the dough. Arrange the apple slices on top in overlapping concentric circles to within 3 inches of the edge. Fold the dough over the apples in a free-form fashion. Brush the apples with the melted butter and sprinkle with the remaining 1 1/2 tablespoons of sugar and cinnamon. Refrigerate the unbaked tart until slightly chilled, about 10 minutes. Preheat the oven to 400. Bake the tart in the center of the oven for 1 hour, or until the apples are tender and golden and the crust is deep golden and cooked through. Brush the apples with the melted preserves. Slide the parchment onto a wire rack and let the tart cool slightly before serving.",
      summeryName : "Summary",
      Summary : "Apricot Glazed Apple Tart is a lacto ovo vegetarian dessert. One portion of this dish contains about 6g of protein, 35g of fat, and a total of 658 calories. For $1.59 per serving, this recipe covers 12% of your daily requirements of vitamins and minerals. This recipe serves 4. From preparation to the plate, this recipe takes around 45 minutes. 3 people found this recipe to be flavorful and satisfying. If you have apples, cinnamon, sugar, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Overall, this recipe earns a not so awesome spoonacular score of 33%. Tarte Aux Abricots - Glazed French Apricot Tart With Almonds, Apricot & Apple Glazed Gammon, and Apricot & Apple Glazed Gammon are very similar to this recipe."

    },
    {
      url : 'https://img.spoonacular.com/recipes/654953-556x370.jpg',
      name : "Pasta with Spicy",
      description : "Cook pasta according to package directions; drain. Meanwhile, heat olive oil in a large skillet over medium-high heat. Add garlic and cook for 1-2 minutes, or until fragrant. Remove sausage from casings, if necessary, and add to the pan. Cook the sausage, breaking it up as you go, until no longer pink. Add the rapini to the skillet and saut until it begins to wilt, about one minute more. Transfer the sausage and rapini mixture to a plate and keep warm. Drain excess grease from the pan and return to stove over medium heat. Add the chicken broth to the skillet and bring to a simmer, scraping any browned bits from the bottom of the pan. Stir in the sour cream and milk. Add the cheeses and stir until melted and smooth. Return the sausage/rapini mixture to the skillet, along with the cooked pasta, and toss to coat. Garnish with additional Parmesan cheese, if desired.",
      summeryName : "Summary",
      Summary : "Pasta with Spicy Sausage & Rapini might be just the main course you are searching for. One portion of this dish contains approximately 22g of protein, 31g of fat, and a total of 515 calories. For $1.5 per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. This recipe serves 8. 2 people have made this recipe and would make it again. This recipe from Foodista requires rapini leaves, parmesan cheese, chicken broth, and garlic. From preparation to the plate, this recipe takes approximately 45 minutes. Overall, this recipe earns a solid spoonacular score of 44%. Spicy Sausage and Rapini Pasta, Chiocciole with Rapini & Hot Italian Sausage, and Crispy Pork Panini with Rapini and Spicy Sauce are very similar to this recipe."
    },{
      url : 'https://img.spoonacular.com/recipes/646361-556x370.jpg',
      name : "Hawaiian Cookie ",
      description : "Shape dough into 1-inch balls and place in prepared muffin pans. Press dough in bottom and up the side of each muffin cup. Bake the dough-lined cup for about 8-10 minutes. Remove the muffin pan from the oven and let rest for a few minutes. Spoon 1 teaspoon of preserves into each muffin cup.",
      summeryName : "Summary",
      Summary : "Hawaiian Cookie Tarts is a lacto ovo vegetarian dessert. One serving contains 362 calories, 3g of protein, and 10g of fat. This recipe serves 12. For 64 cents per serving, this recipe covers 4% of your daily requirements of vitamins and minerals. 2 people have tried and liked this recipe. It is brought to you by Foodista. A mixture of ap flour, pineapple preserves, granulated sugar, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes roughly 1 hour and 15 minutes. Overall, this recipe earns a not so awesome spoonacular score of 15%. Try Hawaiian Cookie Balls, Fruity Cookie Tarts, and Linzer Cookie Tarts for similar recipes."
    },
    {
      url : 'https://img.spoonacular.com/recipes/663588-556x370.jpg',
      name : "Tomato Cutlets",
      description : "Preheat the oven to 425 degrees F. In a small saucepan, add the potato and enough cold water to cover. Add a generous pinch of salt and bring to a boil over medium heat, then reduce the heat and simmer until tender, 12 to 15 minutes. Bring 4 cups water to a simmer and add a generous pinch of salt, bay leaves, 1 teaspoon coriander seeds, peppercorns, chili flakes, and chicken breast. Simmer until cooked through, 8 to 10 minutes. Mash the potato and finely shred the chicken and put into a large bowl. Combine with peas, mango, lime juice, chipotle sauce, remaining coriander seeds, cumin, cilantro, and salt and pepper, to taste. Mixing with a spoon or your hands, until well incorporated. Taste for seasoning and adjust, if necessary. Roll the puff pastry out slightly, flattening the seams. Using a paring knife to trace a 7-inch ring mold or bowl, cut the dough into 8 (7-inch wide) rounds. Cut each into 2 semicircles. Put a tablespoon or so of the filling in the center of a semicircle. Have a small bowl of water handy. Dip your finger in the water and run it along the edges of the semicircle. Arrange the samosas so the flat side is facing away from you. Grab the left corner and fold it over the dough in a triangular motion, so that this corner lands on the bottom right side of the filling. Do the same with the other corner. Squeeze bottom shut, and fold over, sealing with water and then press with a fork. Repeat with remaining dough and filling. Arrange the 8 samosas on a lightly greased baking sheet. In a small bowl, whisk the egg and 1 teaspoon water with a fork until thoroughly combined. Brush the tops with the egg wash. Bake for 15 minutes at 425 degrees F, then turn heat down to 375 degrees F and bake for 10 more minutes. You can flip them over just before you turn the heat down, if you like. Serve with chutney",
      summeryName : "Summary",
      Summary : "Baked Indian Samosas is an Indian recipe that serves 8. One serving contains 784 calories, 14g of protein, and 48g of fat. For $2.39 per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. 2 people were glad they tried this recipe. It works well as a budget friendly hor d'oeuvre. It is brought to you by Foodista. If you have puff pastry, cilantro leaves, bay leaves, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly 45 minutes. It is a good option if you're following a dairy free diet. Taking all factors into account, this recipe earns a spoonacular score of 51%, which is solid. Similar recipes include Traditional Indian Samosas, Spinach samosas with Indian salad, and Spinach samosas with Indian salad."
    }

  ])

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  

  const addToCart = (data)=> {
  const isDataInCart = cart.some(item => item.name === data.name);


if (!isDataInCart) {
  setCart([...cart, data]);
  setShowMessage(false)
} else {
  setShowMessage(true)
}
  }

  const removeCart = (dataToRemove) => {
  const updatedCart = cart.filter(item => item.name !== dataToRemove.name);
  setCart(updatedCart);
  if(updatedCart.length === 0) {
    setShowMessage(true)
  }
  }
  const handleShow = (value) =>{
    setShowCart(value)
  }

  return (
    
    <div>
   <Header count={cart.length} handleShow = {handleShow} />
   {
    showCart ? (
      <>
       <CartList cart = {cart}  removeCart = {removeCart}/>
       {showMessage && <h3 className='sms'>Nothing in the favorites</h3>}
       </>
      ) : (
        <ProductList
        product={ product} 
        addToCart={addToCart}
         
      /> )
   }
    </div>
  );
}
export default App;
