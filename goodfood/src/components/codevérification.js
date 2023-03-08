const { user } = useContext(UserContext);
    const [data, setData] = useState(null)
    console.log(user)
        useEffect(() => {
            async function fetchUserData() {
            if (user) {
                try {
                const response = await fetch('http://0.0.0.0:8080/api/usersconnect', {
                    headers: {
                    Authorization: `Bearer ${user}`
                    }
                });
                const userData = await response.json();
                setData(userData);
                } catch (error) {
                console.error(error);
                }
            }
            }
            fetchUserData();
        }, []);