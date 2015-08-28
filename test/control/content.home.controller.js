describe('Unit : Controller - ContentHomeCtrl', function () {

// load the controller's module
    beforeEach(module('mediaCenterContent'));

    var
        ContentHome, scope, Modals, DB, $timeout, COLLECTIONS, Orders, AppConfig, Messaging, EVENTS, PATHS, $csv;

    beforeEach(inject(function ($controller, _$rootScope_, _Modals_, _DB_, _$timeout_, _COLLECTIONS_, _Orders_, _AppConfig_, _Messaging_, _EVENTS_, _PATHS_, _$csv_) {
            scope = _$rootScope_.$new();
            Modals = _Modals_;
            DB = _DB_;
            $timeout = _$timeout_;
            COLLECTIONS = _COLLECTIONS_;
            Orders = _Orders_;
            AppConfig = _AppConfig_;
            Messaging = _Messaging_;
            EVENTS = _EVENTS_;
            PATHS = _PATHS_;
            $csv = _$csv_;

            ContentHome = $controller('ContentHomeCtrl', {
                $scope: scope,
                MediaCenterInfo: {id: '1', data: {content: {sortBy: 'title'}}},
                Modals: Modals,
                DB: DB,
                $timeout: $timeout,
                COLLECTIONS: COLLECTIONS,
                Orders: Orders,
                AppConfig: AppConfig,
                Messaging: Messaging,
                EVENTS: EVENTS,
                PATHS: PATHS,
                $csv: $csv
            });
        })
    )
    ;

    describe('Units: units should be Defined', function () {
        it('it should pass if ContentHome is defined', function () {
            expect(ContentHome).not.toBeUndefined();
        });
        it('it should pass if Modals is defined', function () {
            expect(Modals).not.toBeUndefined();
        });
         it('it should pass if DB is defined', function () {
            expect(DB).not.toBeUndefined();
        });
        it('it should pass if COLLECTIONS is defined', function () {
            expect(COLLECTIONS).not.toBeUndefined();
        });
        it('it should pass if AppConfig is defined', function () {
            expect(AppConfig).not.toBeUndefined();
        });
        it('it should pass if Messaging function is defined', function () {
            expect(Messaging).not.toBeUndefined();
        });
        it('it should pass if EVENTS function is defined', function () {
            expect(EVENTS).not.toBeUndefined();
        });
        it('it should pass if PATHS function is defined', function () {
            expect(PATHS).not.toBeUndefined();
        });
        it('it should pass if ContentHome.info function is defined', function () {
            expect(ContentHome.info).not.toBeUndefined();
        });
    });
})
;
