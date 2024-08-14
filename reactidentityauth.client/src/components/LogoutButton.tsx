import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LogoutButton() {

    const navigate = useNavigate();


    const handleSubmit = (e: React.FormEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        fetch("/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: ""

        })
            .then((data) => {
                if (data.ok) {

                    navigate("/login");
                }
                else { }


            })
            .catch((error) => {
                console.error(error);
            })

    };

    return (
        <>
             <Button color="inherit" href="#" onClick={handleSubmit} variant="outlined">
                Logout
             </Button>
        </>
    );
}

export default LogoutButton;