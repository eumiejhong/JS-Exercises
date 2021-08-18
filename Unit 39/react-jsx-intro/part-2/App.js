function App() {
    return (
        <div>
            <Tweet
                name="Eumie Jhong"
                username="eumie"
                date={new Date().toDateString()}
                message="First tweet!"
            />
            <Tweet 
                name="Andrew Webb"
                username="androbwebb"
                date={new Date().toDateString()}
                message="Woohoo!!!"
            />
            <Tweet 
                name="Janet Jhong"
                username="janet"
                date={new Date().toDateString()}
                message="Yay new tweet!"
            />
        </div>
    );
}