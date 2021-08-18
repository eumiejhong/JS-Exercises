function App() {
    return (
        <div>
            <Person 
                name="Barry"
                age={30}
                hobbies={["running", "reading", "hiking"]}
            />
            <Person 
                name="Maria"
                age={28}
                hobbies={["knitting", "baking", "brewing"]}
            />
            <Person 
                name="Andrew"
                age={31}
                hobbies={["coding", "traveling", "reading"]}
            />
        </div>
    );
}