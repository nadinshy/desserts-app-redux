import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h2>What is Your Ocasion?</h2>
            {['TORTS', 'KIDS', 'BIRTHDAY', 'WEDDING', 'ALL']
            .map(category => <Filter key={category} category={category}/>)}
        </div>
    )
}

export default AllCategories;