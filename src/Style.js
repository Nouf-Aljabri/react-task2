import { createUseStyles } from "react-jss";

const styles = createUseStyles({
    brown :{
       color: "#4e4039"
    },
    lightBrown :{
        color: "#a08f86"  
    },
    lightorange:{
        backgroundColor: "#fef8f5"
    },
    btn:{
        backgroundColor: "#eb5d1e",
        fontSize:"20px",
        color: "white",
        borderRadius: "3px",
        border: "none"

    },
    cardStyle:{
        backgroundColor: "#fff",
        boxShadow: "0 10px 29px 0 rgb(68 88 144 / 10%)",
        borderRadius: "15px",
        textAlign: "center",
        borderBottom:" 3px solid #fff"
        
    },
    icon:{
        fontSize: "48px",
        lineHeight: "1",
        marginBottom: "15px",
        color: "#ef7f4d",
        
    },
    formBox:{
        width: "100%",
        borderTop: "3px solid #eb5d1e",
        borderBottom: "3px solid #eb5d1e",
        padding: "30px",
        background: "#fff",
        boxShadow: "0 0 24px 0 rgb(0 0 0 / 12%)"
    }
    
});

export default styles;