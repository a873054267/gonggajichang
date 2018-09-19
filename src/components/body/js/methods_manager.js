/**
 * Created by W on 2018-06-28 22:06.
 */
import esriLoader from 'esri-loader';
import tileInfo from './tdt_data';

class Methods {
    loadArcgis () {// 该方法用于加载 arcgis 依赖的js,css 等
        esriLoader.loadScript ({ // 加载js
            url: 'http://' + location.host + '/static/dojo/dojo.js',
            // url: 'http://jsapi.thinkgis.cn/dojo/dojo.js',
            dojoConfig: {
                async: true
            },
        });
        // 加载css
        esriLoader.loadCss ('http://' + location.host + '/static/esri/css/esri.css');
        // esriLoader.loadCss ('http://jsapi.thinkgis.cn/esri/css/esri.css');
        // 加载模块
        esriLoader.loadModules ([
            'esri/map',
            'esri/layers/TiledMapServiceLayer',
            'esri/SpatialReference',
            'esri/geometry/Extent',
            'esri/layers/TileInfo',
            'esri/geometry/Point',
        ], {
            url: 'http://' + location.host + '/static/dojo/dojo.js'
        })
            .then (this.loading)
            .then (obj => {
                this.initMap (obj);
            })
            .catch ((err) => {
                console.trace (err.message);
            });
    }

    loading ([// 注意 这里的参数是数组,该方法用于自定义TiledMapServiceLayer加载天地图;
        Map,
        TiledMapServiceLayer,
        SpatialReference,
        Extent,
        TileInfo,
        Point,
    ]) {
        dojo.declare ('TDT', TiledMapServiceLayer, {
            constructor (maptype) {
                this._maptype = maptype;
                this.spatialReference = new SpatialReference ({ wkid: 4326 });
                this.initialExtent = (this.fullExtent = new Extent (-180, -90, 180, 90,
                    this.spatialReference));

                this.tileInfo = new TileInfo (tileInfo.tileInfo);
                this.loaded = true;
                this.onLoad (this);
            },

            getTileUrl (level, row, col) {
                return 'http://t' + col % 8 + '.tianditu.cn/' + this._maptype + '_c/wmts?' +
                    'SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=' + this._maptype +
                    '&STYLE=default&TILEMATRIXSET=c&TILEMATRIX=' +
                    level + '&TILEROW=' + row + '&TILECOL=' + col + '&FORMAT=tiles';
            }
        });
        return { // return 之后才能使用链式调用
            Map,
            TiledMapServiceLayer,
            SpatialReference,
            Extent,
            TileInfo,
            Point,
            TDT,
        };
    }


    initMap (obj) { // 初始化地图,并设置中心点等
        this.mapObj = obj;// 将对象保存到vue data 的 maoObj中,方便调用;
        let map = new this.mapObj.Map ('map', { logo: false });// 创建地图实例
        var pt = new this.mapObj.Point (105, 29); // 设置中心点
        map.centerAndZoom (pt, 4); // 设置中心点和缩放级别;
        let img = new TDT ('img') // 影像
        let cia = new TDT ('cia');//路网
        map.addLayer (img) // 将图层添加到map对象
        map.addLayer (cia)
    }
}

export default new Methods ()
