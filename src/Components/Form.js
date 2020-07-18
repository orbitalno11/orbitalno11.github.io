import React, {Component} from "react";

class Form extends Component{



    render() {
        return(
            <React.Fragment>
                <form>
                    <input type="file" name="file"/>
                    <input type="text" name="year"/>
                    <input type="text" name="type"/>
                    <input type="text" name="channel"/>
                    <button type="submit">submit</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Form