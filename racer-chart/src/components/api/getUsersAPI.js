export const getUserData = async page => {
  try {
    const { results } = await (
      await fetch(`https://randomuser.me/api/?results=50&page=${page}`)
    ).json();
    return results;
  } catch (error) {
    console.log(error.message);
  }
};
