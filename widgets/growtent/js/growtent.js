'use strict';

if (!vis.binds.growtent) {
    vis.binds.growtent = {};
}

vis.binds.growtent.version = '0.0.3';

/**
 * Vollständiges Control-Widget initialisieren
 */
vis.binds.growtent.initFull = function (wid, data) {
    var rootId = '#gc_' + wid;
    var $root = $(rootId);
    if (!$root.length) return;

    data = data || {};

    // Widget-Parameter -> Config-States unter 0_userdata.0.grow.config.*
    function mapAttrToConfig(attrName, configKey) {
        if (data[attrName]) {
            var oid = data[attrName];
            vis.setValue('0_userdata.0.grow.config.' + configKey, oid);
        }
    }

    mapAttrToConfig('fanEndpoint',   'fanId');
    mapAttrToConfig('lightEndpoint', 'lightId');
    mapAttrToConfig('heatEndpoint',  'heatmatId');
    mapAttrToConfig('tempSensor',    'tempId');
    mapAttrToConfig('humSensor',     'humId');

    // --- ab hier dein bisheriger Code unverändert ---
    // Helper: Checkbox von State spiegeln
    function bindCheckbox(oid, selector) {
        if (!oid) return;
        var full = oid + '.val';

        function update() {
            var v = !!vis.states[full];
            $root.find(selector).prop('checked', v);
        }

        update();
        vis.states.bind(full, function () {
            update();
        });
    }

    function bindIndicator(oid, selector) {
        if (!oid) return;
        var full = oid + '.val';

        function update() {
            var v = !!vis.states[full];
            $root.find(selector).toggleClass('on', v);
        }

        update();
        vis.states.bind(full, function () {
            update();
        });
    }

    function bindPresetActive() {
        var oid = '0_userdata.0.grow.preset_active';
        var full = oid + '.val';

        function update() {
            var mode = vis.states[full] || 'custom';
            $root.find('.gt-preset').removeClass('active');
            $root.find('.gt-preset[data-mode="' + mode + '"]').addClass('active');
        }

        update();
        vis.states.bind(full, function () {
            update();
        });
    }

    bindCheckbox('0_userdata.0.grow.enabled',               '.gt-toggle-enabled');
    bindCheckbox('0_userdata.0.grow.purge_enabled',         '.gt-toggle-purge');
    bindCheckbox('0_userdata.0.grow.heat_enabled',          '.gt-toggle-heat-auto');
    bindCheckbox('0_userdata.0.grow.light_schedule_enabled','.gt-toggle-light-sched');
    bindCheckbox('0_userdata.0.grow.light_manual',          '.gt-toggle-light-manual');
    bindCheckbox('0_userdata.0.grow.heat_manual',           '.gt-toggle-heat-manual');

    bindIndicator('0_userdata.0.grow.status_light', '.gt-ind-light');
    bindIndicator('0_userdata.0.grow.status_heat',  '.gt-ind-heat');

    bindPresetActive();

    console.log('vis-growtent: FullControl widget initialised (' + wid + '), version ' + vis.binds.growtent.version);
};


/**
 * Kompaktes Monitor-Widget initialisieren
 */
vis.binds.growtent.initMonitor = function (wid) {
    var rootId = '#gm_' + wid;
    var $root = $(rootId);
    if (!$root.length) return;

    function bindDot(oid, selector) {
        if (!oid) return;
        var full = oid + '.val';

        function update() {
            var v = !!vis.states[full];
            $root.find(selector).toggleClass('on', !!v);
        }

        update();
        vis.states.bind(full, function () {
            update();
        });
    }

    // Auto / Licht / Heat aktiv?
    bindDot('0_userdata.0.grow.enabled',       '.gm-dot-auto');
    bindDot('0_userdata.0.grow.status_light',  '.gm-dot-light');
    bindDot('0_userdata.0.grow.status_heat',   '.gm-dot-heat');

    // Phase einfärben
    var presetOid = '0_userdata.0.grow.preset_active';
    var presetFull = presetOid + '.val';

    function updatePhase() {
        var p = String(vis.states[presetFull] || 'custom');
        var $chip = $root.find('.gm-phase-chip');
        $chip
            .removeClass('phase-seedling phase-vegetative phase-flower phase-drying phase-custom');

        var cls;
        if (p === 'seedling') cls = 'phase-seedling';
        else if (p === 'vegetative') cls = 'phase-vegetative';
        else if (p === 'flower') cls = 'phase-flower';
        else if (p === 'drying') cls = 'phase-drying';
        else cls = 'phase-custom';

        $chip.addClass(cls);
    }

    updatePhase();
    vis.states.bind(presetFull, function () {
        updatePhase();
    });

    console.log('vis-growtent: Monitor widget initialised (' + wid + '), version ' + vis.binds.growtent.version);
};

console.log('vis-growtent: binds loaded, version ' + vis.binds.growtent.version);
