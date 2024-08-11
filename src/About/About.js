export function About() {
  return (
    <div className="container">
      <h1>Welcome to Meal Master</h1>
      <h2 className="header">Here’s what you can do with our app:</h2>
      <div className="about-info">
        <div className="about-item">
          <h3>Find the Perfect Recipe</h3>
          <p>
            Looking for inspiration for your next meal? Our recipe search
            feature will help you find the perfect recipes based on your
            preferences and available ingredients. Enter keywords or select a
            category, and you’ll get a list of recipes tailored to your needs.
          </p>
        </div>
        <div className="about-item">
          <h3>Analyze Nutrition</h3>
          <p>
            Want to understand how healthy your diet is? Use our nutrition
            analysis feature to calculate the calorie content and other
            nutritional values of your meals. Simply enter the details of your
            dish, and we’ll provide you with a detailed analysis to help you
            better understand what you’re eating.
          </p>
        </div>
      </div>
    </div>
  );
}
