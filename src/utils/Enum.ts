export enum ResizeMode {
    /**
     * Fit within component bounds while preserving aspect ratio.
     */
    CONTAIN = 'contain',
    /**
     * Fill component bounds while preserving aspect ratio.
     */
    COVER = 'cover',
    /**
     * Stretch to fill component bounds.
     */
    STRETCH = 'stretch',
  }

  export enum SEAT_COLOR {
    SEAT_AVAILABLE = 'seat_available',

    SEAT_OCCUPIED = 'seat_occupied',

    SEAT_CHOSEN = 'seat_chosen'
  }