function Factors() {
    const factorsArray = ['teachers', 'background education', 'mental/physical disability', 'gender', 'program']
    const renderFactors = factorsArray ? factorsArray.map((facts) => {
        return (
            <>
                <option value={factorsArray.indexOf(facts)}>
                    {facts}
                </option>
            </>)
    }):'';

    return (
        <>
            {renderFactors}
        </>
    );
}
export default Factors;