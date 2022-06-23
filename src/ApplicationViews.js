import React from "react"
import { Route, useLocation } from "react-router-dom"
import { DecadeGrid } from "./components/Decades/DecadeGrid"
import { DecadePage } from "./components/Decades/DecadePage"
import { HomePage } from "./components/HomePage"
import { MovieForm } from "./components/Movies/MovieForm"
import { MoviePage } from "./components/Movies/MoviePage"
import { UpdateMovieForm } from "./components/Movies/UpdateMovieForm"
import { ListForm } from "./components/MyLists/ListForm"
import { MyLists } from "./components/MyLists/MyLists"
import { ReviewForm } from "./components/Reviews/ReviewForm"

export const ApplicationViews = () => {
    return <>

            <Route exact path="/home">
                <HomePage />
            </Route>

            <Route exact path="/">
                <HomePage />
            </Route>

            <Route exact path="/decades">
                <DecadeGrid />
            </Route>

            <Route exact path="/new_movie">
                <MovieForm />
            </Route>

            <Route exact path="/my_lists">
                <MyLists />
            </Route>

            <Route exact path="/create_list">
                <ListForm />
            </Route>

            <Route exact path="/edit/:movieId(\d+)">
                <UpdateMovieForm />
            </Route>

            <Route exact path="/:year(\d+)/:movieId(\d+)">
                <MoviePage />
            </Route>

            <Route exact path="/:year(\d+)/:movieId(\d+)/review/:reviewId(\d+)">
                <ReviewForm />
            </Route>

            <Route exact path="/:year(\d+)">
                <DecadePage />
            </Route>
    </>
}
