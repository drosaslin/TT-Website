const PHOTOS_DIV = 'photos';
const VIDEOS_DIV = 'videos';

filterImages(PHOTOS_DIV);

function filterImages(type) {
    if (type == VIDEOS_DIV) {
        $('.photos').hide();
        $('.videos').show();
    }
    else {
        $('.photos').show();
        $('.videos').hide();
    }
}