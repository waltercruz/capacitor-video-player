export declare class VideoPlayer {
    videoEl: HTMLVideoElement;
    pipMode: boolean;
    pipWindow: Window;
    isPlaying: boolean;
    private _url;
    private _playerId;
    private _container;
    private _mode;
    private _width;
    private _height;
    private _zIndex;
    private _initial;
    private _videoType;
    private _videoContainer;
    private _firstReadyToPlay;
    private _isEnded;
    constructor(mode: string, url: string, playerId: string, container: any, zIndex: number, width?: number, height?: number);
    initialize(): Promise<void>;
    private createVideoElement;
    private _goFullscreen;
    private _setPlayer;
    private _getVideoType;
    private _doHide;
    private _createEvent;
    private _closeFullscreen;
}
