//react function based component

import PropTypes from "prop-types";
export default function NavMessage(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        {props.title}{/*prop */}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    {props.name}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Value:{props.aboutanuz}

                                </a>
                            </li>


                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
//typechecking using propTypes
// install prop type package first using => npm install prop-types 
// then import PropTypes from 'prop-types' 
// there is difference between propTypes and PropTypes
//there are more prop types besides string and number, look in chatgpt
NavMessage.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string,
    aboutanuz: PropTypes.string
};
NavMessage.defaultProps = {
    aboutanuz: 'anuz'
}