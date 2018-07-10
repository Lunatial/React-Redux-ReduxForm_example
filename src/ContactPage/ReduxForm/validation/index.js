export const required = value =>
    value ? undefined : 'Na! ide is kell érték!';

export const minLength = value =>
    value.length < 4
        ? 'Túúúúl rövid!'
        : undefined;

export const maxLength = value =>
    value.length > 16
        ? 'Ez most komoly? Rövidebb nem lehetne?'
        : undefined;

export const emailVal = value =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? undefined
        : 'Nem, ez nem valid email';





// export const matchesPassword = (value, allValues) =>
//     value === allValues.password ? undefined : 'Passowrds must match!';

// export const asyncValidate = async values => {
//     const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//     await sleep(1000);
//     if (['Kori', 'Kornél', 'Pintér Kornél', 'Laci', 'Lackó, Kovács László', 'Balázs', 'Bazsi', 'Hováth Balázs']
//         .includes(values.username)) {
//         return Promise.reject({
//             username: 'Username already taken'
//         });
//     }
// };