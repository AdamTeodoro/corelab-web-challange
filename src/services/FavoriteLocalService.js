
function FavoriteLocalService() {
    function getFavorites()  {
        return JSON.parse(localStorage.getItem('Favorites'))
    }

    function setFavorites(favorites) {
        return localStorage.setItem('Favorites', JSON.stringify(favorites))
    }

    function addFavorite(favorite) {
        const favorites = getFavorites();
        const i = favorites.findIndex((f) => f.id === favorite.id);
        if ( i !== -1) {
            return;
        } else {
            favorites.push(favorite);
            setFavorites(favorites);
        }
    }

    function removeFavorite(idFavorite) {
        const favorites = getFavorites();
        const newFavorites = favorites.filter((f) => f.id !== idFavorite);
        setFavorites(newFavorites);
    }

    return {
        getFavorites,
        setFavorites,
        addFavorite,
        removeFavorite
    }
}

export const favoriteLocalService = new FavoriteLocalService();
