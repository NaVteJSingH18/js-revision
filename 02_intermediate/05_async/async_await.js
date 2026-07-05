async function preent(){
        await setTimeout(() => {
            console.log("late")
        }, 2000);

            console.log("early")
    }

    preent()