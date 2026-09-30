import RecipeInfo from "../components/RecipeInfo";

import Ingredients from "../components/Ingredients";

import recipe from '../data/recipe.json'
import Instrucoes from "../components/instrucoes";

export default function RecipePage() {

    return (
        <div className="-mx-4 bg-stone-100 px-3 py-6 sm:mx-0 sm:rounded-3xl sm:px-6 sm:py-12 md:py-20">
            <article>
                <RecipeInfo
                    title={recipe.title}
                    summary={recipe.summary}
                    cover={recipe.cover}
                    prepMinutes={recipe.prepMinutes}
                    cookMinutes={recipe.cookMinutes}
                />
                <hr className="border-stone-200"/>
                {/* Os outros componentes ingredientes e instrucoes */}
                <Ingredients 
                items={recipe.ingredients}
                />
                <Instrucoes
                passos={recipe.instructions}
                />
            </article>
        </div>
    )
}