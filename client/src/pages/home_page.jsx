import SearchBar from "../components/search_bar";
import Categories from "../components/categories";
import CurrentTrends from "../components/current_trends";

const HomePage = () => {

    return (
        <div className="p-5 h-full">
            <SearchBar />
            <div className="main flex flex-col md:flex-row justify-between h-full">
                <Categories />
                <CurrentTrends />
            </div>
        </div>
    )
}

export default HomePage;