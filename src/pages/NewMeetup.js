import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            "https://react-getting-started-d5873-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupsPage;