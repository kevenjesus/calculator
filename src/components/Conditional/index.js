const Conditional = ({check, children}) => {
    if(check) {
        return children;
    }
    return false;
}

export default Conditional;