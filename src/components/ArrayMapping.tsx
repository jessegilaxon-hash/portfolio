function ArrayMapping() {
    const nums = [11,22,33,44,55,66,77];
    const winners = [
        {
        firstName: 'John',
        lastName: 'Smith'
        },
        {
        firstName: 'Harry',
        lastName: 'Lou'
        },
        {
        firstName: 'Sai',
        lastName: 'Michael'
        }
    ];



    return(
        <>
        <h2>Winning Lottery Numbers</h2>
        <div className="flex gap-x-4 font-bold text-green-900 text-center">
            {
            nums.map((num) => <span className="hover:text-green-600 underline size-8 pt-1 rounded-full hover:bg-slate-200">{num}</span>) 
            }
        </div>
        <h2>Past Lottery Winners</h2>
        <div>
            {winners.map(
            (winner) => <p>{winner.firstName} {winner.lastName}</p>
            )}
        </div>
        </>
    );
}

export default ArrayMapping;