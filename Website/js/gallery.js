const PHOTOS_DIV = 'photos';
const VIDEOS_DIV = 'videos';

filterImages(PHOTOS_DIV);

function filterImages(type) {
    if (type == VIDEOS_DIV) {
        $('.photos').hide(1000);
        $('.videos').show(1000);
    }
    else {
        $('.photos').show(1000);
        $('.videos').hide(1000);
    }
}