import React, { useEffect } from 'react'
import "./App.css"
import {
    Switch, Route
} from "react-router-dom"
import UsersPage from "./Pages/UsersPage/UsersPage"
import PostsPage from "./Pages/PostsPage/PostsPage"
import CommentsPage from "./Pages/CommentsPage/CommentsPage"
import TodosPage from "./Pages/TodosPage/TodosPage"
import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage"
import ProductsPage from "./Pages/ProductsPage/ProductsPage"
import Controller from "./Pages/MainPage/Controller"
import { useSelector, useDispatch } from "react-redux"
import { getUser, getPost, getComment, getTodo, getCategory, getProduct } from "./Redux/actions"
import Button from "./Components/BackButton/Button"

function App() {

    const { Users, Posts, Comments, Todos, Categories, Products } = useSelector(state => state)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
        dispatch(getPost())
        dispatch(getComment())
        dispatch(getTodo())
        dispatch(getCategory())
        dispatch(getProduct())
    }, [])
    

    const styleFlex = {
        display: "flex",
        flexWrap: "wrap"
    }

    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact>
                    <Controller />
                </Route>

                <Route path="/users" exact>
                    <div style={styleFlex}>
                        {Users.map(item => {
                            return <UsersPage id={item.id} name={item.name} email={item.email} gender={item.gender} status={item.status} created_at={item.created_at} />
                        })}
                    </div>
                    <Button />
                </Route>
                <Route path="/posts" exact>
                <div style={styleFlex}>
                    {Posts.map(item => {
                        return <PostsPage id={item.id} title={item.title} body={item.body} date={item.created_at} />
                    })}
                    </div>
                    <Button />
                </Route>
                <Route path="/comments" exact>
                <div style={styleFlex}>
                    {Comments.map(item => {
                        return <CommentsPage id={item.id} name={item.name} email={item.email} comment={item.body} />
                    })}
                     </div>
                     <Button/>
                </Route>
                <Route path="/todos" exact>
                <div style={styleFlex}>
                    {Todos.map(item => {
                        return <TodosPage id={item.id} completed={item.completed} title={item.title} date={item.created_at} />
                    })}
                     </div>
                     <Button/>
                </Route>
                <Route path="/categories" exact>
                <div style={styleFlex}>
                    {Categories.map(item => {
                        return <CategoriesPage id={item.id} interest={item.name} description={item.description}/>
                    })}
                     </div>
                     <Button/>
                </Route>
                <Route path="/products" exact>
                <div style={styleFlex}>
                    {Products.map(item => {
                        return <ProductsPage id={item.id} name={item.name} image={item.image} categories={item.categories[0].name} description={item.description} price={item.price} discount={item.discount_amount} />
                    })}
                     </div>
                     <Button/>
                </Route>

            </Switch>



        </React.Fragment>
    )
}

export default App
