

exports.pianoNameMap = new Map([
    // Grand Piano
    [0x02D577B5A0000000n, 'Royal Grand 3D YaS6 Lrg 5.4'],
    [0x4F04DA3060000000n, 'White Grand Lrg 6.1'],
    [0x85F256D930000000n, 'Grand Lady D   Stw D  Lrg 5.3'],

    // Upright Piano
    [0xe5dd43ce0000000n, 'Bambino Upright Baldwin XL 5.4'],
    [0x40f4358d90000000n, 'Black Upright Petrof Lrg 5.3'],
    [0xc354a2c600000000n, 'HonkyTonkUpright      Lrg 5.3'],

    // Electric Piano
    [0x4e099de00000000n, 'EP1 Deep Timbre Lrg 6.0'],

    // Clavinet
    [0x1bedfa440000000n, 'Clavinet D6  5.0'],

    // Digital
    [0x51accddc0000000n, 'DX7 FullTines  Lrg 5.4'],

    // Misc
    [0x97a8d1770000000n, 'Ballad EP1  Sml 5.2'],

    // Samples
    [0x071348A9B0000000n, 'OrchString Legato'],      // Sample 1
    [0x000C39B798000000n, 'DeepSoft'],               // Sample 2
    [0x06B11580D8000000n, 'SymphStr FastAtk Amb'],   // Sample 3
    [0xC52F98AB40000000n, 'A'],                      // Sample 4
    [0xC2CB0EFCA8000000n, 'B'],                      // Sample 4
]);

exports.pianoTypeMap = new Map([
    [0x00, 'Grand'],
    [0x01, 'Upright'],
    [0x02, 'Electric'],
    [0x03, 'Clav'],
    [0x04, 'Digital'],
    [0x05, 'Misc'],
]);

exports.organTypeMap = new Map([
    [0x00, 'B3'],
    [0x01, 'Vox'],
    [0x02, 'Farfisa'],
    [0x03, 'Pipe1'],
    [0x04, 'Pipe2'],
]);

exports.organVibratoModeMap = new Map([
    [0x00, 'V1'],
    [0x01, 'C1'],
    [0x02, 'V2'],
    [0x03, 'C2'],
    [0x04, 'V3'],
    [0x05, 'C3'],
]);

exports.sourceMap = new Map([
    [0x00, 'Organ'],
    [0x01, 'Piano'],
    [0x02, 'Synth'],
]);

exports.rotarySpeakerSpeedMap = new Map([
    [0x00, 'Slow/Stop'],
    [0x01, 'Fast'],
]);

exports.synthOscillatorTypeMap = new Map([
    [0x00, 'Classic'],
    [0x01, 'Wave'],
    [0x02, 'Formant'],
    [0x03, 'Super'],
    [0x04, 'Sample'],
]);

exports.synthOscillator1ClassicWaveFormMap = new Map([
    [0, 'Sine'],
    [1, 'Triangle'],
    [2, 'Saw'],
    [3, 'Square'],
    [4, 'Pulse 33'],
    [5, 'Pulse 10'],
    [6, 'ESaw'],
    [7, 'ESquare'],
]);

exports.synthOscillator1WaveWaveFormMap = new Map([
    [0, 'Wave 2nd Harm'],
    [1, 'Wave 3rd Harm'],
    [2, 'Wave 4th Harm'],
    [3, 'Wave 5th Harm'],
    [4, 'Wave 6th Harm'],
    [5, 'Wave 7th Harm'],
    [6, 'Wave 8th Harm'],
    [7, 'Wave Organ 1'],
    [8, 'Wave Organ 2'],
    [9, 'Wave Principal'],
    [10, 'Wave Flute 1'],
    [11, 'Wave Flute 2'],
    [12, 'Wave Clarinet 1'],
    [13, 'Wave Clarinet 2'],
    [14, 'Wave Alto Sax'],
    [15, 'Wave Tenor Sax'],
    [16, 'Wave 2nd Spectra'],
    [17, 'Wave 3rd Spectra'],
    [18, 'Wave 4th Spectra'],
    [19, 'Wave 5th Spectra'],
    [20, 'Wave 6th Spectra'],
    [21, 'Wave 7th Spectra'],
    [22, 'Wave 8th Spectra'],
    [23, 'Wave Saw Random'],
    [24, 'Wave Saw Bright'],
    [25, 'Wave Sqr Bright'],
    [26, 'Wave Saw NoFund'],
    [27, 'Wave EPiano 1'],
    [28, 'Wave EPiano 2'],
    [29, 'Wave EPiano 3'],
    [30, 'Wave DX 1'],
    [31, 'Wave DX 2'],
    [32, 'Wave Full Tines'],
    [33, 'Wave Ac Piano'],
    [34, 'Wave Ice 1'],
    [35, 'Wave Ice 2'],
    [36, 'Wave Clavinet 1'],
    [37, 'Wave Clavinet 2'],
    [38, 'Wave Clavinet 3'],
    [39, 'Wave Triplets'],
    [40, 'Wave Bell'],
    [41, 'Wave Bar 1'],
    [42, 'Wave Bar 2'],
    [43, 'Wave Tines'],
    [44, 'Wave Marimba'],
    [45, 'Wave Tubular Bells'],
]);

exports.synthOscillator1FormantWaveFormMap = new Map([
    [0, 'Format Wave Aaa'],
    [1, 'Format Wave Eee'],
    [2, 'Format Wave Iii'],
    [3, 'Format Wave Ooo'],
    [4, 'Format Wave Uuu'],
    [5, 'Format Wave Yyy'],
    [6, 'Format Wave AO'],
    [7, 'Format Wave AE'],
    [8, 'Format Wave OE'],
]);

exports.synthOscillator1SuperWaveFormMap = new Map([
    [0, 'Super Wave Saw'],
    [1, 'Super Wave Saw 2'],
    [2, 'Super Wave Square'],
    [3, 'Super Wave Square 2'],
    [4, 'Super Wave Bright'],
    [5, 'Super Wave Bright 2'],
    [6, 'Super Wave Strings'],
    [7, 'Super Wave Organ'],
]);

exports.dBMap = new Map([
    [0, 'Off'],
    [1, '-84.2 dB'],
    [2, '-72.1 dB'],
    [3, '-65.1 dB'],
    [4, '-60.1 dB'],
    [5, '-56.2 dB'],
    [6, '-53.0 dB'],
    [7, '-50.3 dB'],
    [8, '-48.0 dB'],
    [9, '-46.0 dB'],
    [10, '-44.2 dB'],
    [11, '-42.5 dB'],
    [12, '-41.0 dB'],
    [13, '-39.6 dB'],
    [14, '-38.3 dB'],
    [15, '-37.1 dB'],
    [16, '-36.0 dB'],
    [17, '-34.9 dB'],
    [18, '-33.9 dB'],
    [19, '-33.0 dB'],
    [20, '-32.1 dB'],
    [21, '-31.1 dB'],
    [22, '-30.5 dB'],
    [23, '-29.7 dB'],
    [24, '-28.9 dB'],
    [25, '-28.2 dB'],
    [26, '-27.6 dB'],
    [27, '-26.9 dB'],
    [28, '-26.3 dB'],
    [29, '-25.7 dB'],
    [30, '-25.1 dB'],
    [31, '-24.5 dB'],
    [32, '-23.9 dB'],
    [33, '-23.4 dB'],
    [34, '-22.9 dB'],
    [35, '-22.4 dB'],
    [36, '-21.9 dB'],
    [37, '-21.4 dB'],
    [38, '-21.0 dB'],
    [39, '-20.5 dB'],
    [40, '-20.1 dB'],
    [41, '-19.6 dB'],
    [42, '-19.2 dB'],
    [43, '-18.8 dB'],
    [44, '-18.4 dB'],
    [45, '-18.0 dB'],
    [46, '-17.6 dB'],
    [47, '-17.3 dB'],
    [48, '-16.9 dB'],
    [49, '-16.5 dB'],
    [50, '-16.2 dB'],
    [51, '-15.8 dB'],
    [52, '-15.5 dB'],
    [53, '-15.2 dB'],
    [54, '-14.9 dB'],
    [55, '-14.5 dB'],
    [56, '-14.2 dB'],
    [57, '-13.9 dB'],
    [58, '-13.6 dB'],
    [59, '-13.3 dB'],
    [60, '-13.0 dB'],
    [61, '-12.7 dB'],
    [62, '-12.5 dB'],
    [63, '-12.2 dB'],
    [64, '-11.9 dB'],
    [65, '-11.6 dB'],
    [66, '-11.4 dB'],
    [67, '-11.1 dB'],
    [68, '-10.9 dB'],
    [69, '-10.6 dB'],
    [70, '-10.3 dB'],
    [71, '-10.1 dB'],
    [72, '-9.9 dB'],
    [73, '-9.6 dB'],
    [74, '-9.4 dB'],
    [75, '-9.1 dB'],
    [76, '-8.9 dB'],
    [77, '-8.7 dB'],
    [78, '-8.5 dB'],
    [79, '-8.2 dB'],
    [80, '-8.0 dB'],
    [81, '-7.8 dB'],
    [82, '-7.6 dB'],
    [83, '-7.4 dB'],
    [84, '-7.2 dB'],
    [85, '-7.0 dB'],
    [86, '-6.8 dB'],
    [87, '-6.6 dB'],
    [88, '-6.4 dB'],
    [89, '-6.2 dB'],
    [90, '-6.0 dB'],
    [91, '-5.8 dB'],
    [92, '-5.6 dB'],
    [93, '-5.4 dB'],
    [94, '-5.2 dB'],
    [95, '-5.0 dB'],
    [96, '-4.9 dB'],
    [97, '-4.7 dB'],
    [98, '-4.5 dB'],
    [99, '-4.3 dB'],
    [100, '-4.2 dB'],
    [101, '-4.0 dB'],
    [102, '-3.8 dB'],
    [103, '-3.6 dB'],
    [104, '-3.5 dB'],
    [105, '-3.3 dB'],
    [106, '-3.1 dB'],
    [107, '-3.0 dB'],
    [108, '-2.8 dB'],
    [109, '-2.7 dB'],
    [110, '-2.5 dB'],
    [111, '-2.3 dB'],
    [112, '-2.2 dB'],
    [113, '-2.0 dB'],
    [114, '-1.9 dB'],
    [115, '-1.7 dB'],
    [116, '-1.6 dB'],
    [117, '-1.4 dB'],
    [118, '-1.3 dB'],
    [119, '-1.1 dB'],
    [120, '-1.0 dB'],
    [121, '-0.8 dB'],
    [122, '-0.7 dB'],
    [123, '-0.6 dB'],
    [124, '-0.4 dB'],
    [125, '-0.3 dB'],
    [126, '-0.1 dB'],
    [127, '0.0 dB'],
]);

exports.synthOctaveShiftMap = new Map([
    [1, '-1'],
    [2, '0'],
    [3, '1'],
]);

exports.synthPitchShiftRangeMap = new Map([
    [0, '±1 semi'], // macos: shift + option + =
    [1, '±2 semi'],
    [2, '±3 semi'],
    [3, '±4 semi'],
    [4, '±5 semi'],
    [5, '±7 semi'],
    [6, '±10 semi'],
    [7, '±12 semi'],
    [8, '+2/-12 semi'],
    [9, '+2/-24 semi'],
]);

exports.synthLfoWaveMap = new Map([
    [0, 'Triangle'],
    [1, 'Saw'],
    [2, 'Neg Saw'],
    [3, 'Square'],
    [4, 'S/H'],
]);

exports.synthLfoRateMap = new Map([
    [0, '0.03 Hz'],
    [1, '0.03 Hz'],
    [2, '0.03 Hz'],
    [3, '0.04 Hz'],
    [4, '0.04 Hz'],
    [5, '0.04 Hz'],
    [6, '0.05 Hz'],
    [7, '0.05 Hz'],
    [8, '0.05 Hz'],
    [9, '0.06 Hz'],
    [10, '0.06 Hz'],
    [11, '0.07 Hz'],
    [12, '0.07 Hz'],
    [13, '0.08 Hz'],
    [14, '0.09 Hz'],
    [15, '0.09 Hz'],
    [16, '0.10 Hz'],
    [17, '0.11 Hz'],
    [18, '0.12 Hz'],
    [19, '0.13 Hz'],
    [20, '0.14 Hz'],
    [21, '0.15 Hz'],
    [22, '0.16 Hz'],
    [23, '0.17 Hz'],
    [24, '0.19 Hz'],
    [25, '0.20 Hz'],
    [26, '0.22 Hz'],
    [27, '0.24 Hz'],
    [28, '0.26 Hz'],
    [29, '0.28 Hz'],
    [30, '0.30 Hz'],
    [31, '0.32 Hz'],
    [32, '0.35 Hz'],
    [33, '0.38 Hz'],
    [34, '0.41 Hz'],
    [35, '0.44 Hz'],
    [36, '0.47 Hz'],
    [37, '0.51 Hz'],
    [38, '0.55 Hz'],
    [39, '0.60 Hz'],
    [40, '0.64 Hz'],
    [41, '0.70 Hz'],
    [42, '0.75 Hz'],
    [43, '0.81 Hz'],
    [44, '0.88 Hz'],
    [45, '0.95 Hz'],
    [46, '1.0 Hz'],
    [47, '1.1 Hz'],
    [48, '1.2 Hz'],
    [49, '1.3 Hz'],
    [50, '1.4 Hz'],
    [51, '1.5 Hz'],
    [52, '1.6 Hz'],
    [53, '1.8 Hz'],
    [54, '1.9 Hz'],
    [55, '2.0 Hz'],
    [56, '2.2 Hz'],
    [57, '2.4 Hz'],
    [58, '2.6 Hz'],
    [59, '2.8 Hz'],
    [60, '3.0 Hz'],
    [61, '3.2 Hz'],
    [62, '3.5 Hz'],
    [63, '3.8 Hz'],
    [64, '4.1 Hz'],
    [65, '4.4 Hz'],
    [66, '4.8 Hz'],
    [67, '5.2 Hz'],
    [68, '5.6 Hz'],
    [69, '6.0 Hz'],
    [70, '6.5 Hz'],
    [71, '7.0 Hz'],
    [72, '7.6 Hz'],
    [73, '8.2 Hz'],
    [74, '8.8 Hz'],
    [75, '9.5 Hz'],
    [76, '10 Hz'],
    [77, '11 Hz'],
    [78, '12 Hz'],
    [79, '13 Hz'],
    [80, '14 Hz'],
    [81, '15 Hz'],
    [82, '16 Hz'],
    [83, '18 Hz'],
    [84, '19 Hz'],
    [85, '21 Hz'],
    [86, '22 Hz'],
    [87, '24 Hz'],
    [88, '26 Hz'],
    [89, '28 Hz'],
    [90, '30 Hz'],
    [91, '33 Hz'],
    [92, '35 Hz'],
    [93, '38 Hz'],
    [94, '41 Hz'],
    [95, '45 Hz'],
    [96, '48 Hz'],
    [97, '52 Hz'],
    [98, '56 Hz'],
    [99, '61 Hz'],
    [100, '65 Hz'],
    [101, '71 Hz'],
    [102, '76 Hz'],
    [103, '82 Hz'],
    [104, '89 Hz'],
    [105, '96 Hz'],
    [106, '104 Hz'],
    [107, '112 Hz'],
    [108, '121 Hz'],
    [109, '131 Hz'],
    [110, '141 Hz'],
    [111, '153 Hz'],
    [112, '165 Hz'],
    [113, '178 Hz'],
    [114, '192 Hz'],
    [115, '208 Hz'],
    [116, '224 Hz'],
    [117, '242 Hz'],
    [118, '262 Hz'],
    [119, '283 Hz'],
    [120, '305 Hz'],
    [121, '330 Hz'],
    [122, '356 Hz'],
    [123, '385 Hz'],
    [124, '415 Hz'],
    [125, '449 Hz'],
    [126, '484 Hz'],
    [127, '523 Hz'],
]);

exports.synthEnvAttackMap = new Map([
    [0, '0.5 ms'],
    [1, '0.6 ms'],
    [2, '0.7 ms'],
    [3, '0.9 ms'],
    [4, '1.1 ms'],
    [5, '1.3 ms'],
    [6, '1.5 ms'],
    [7, '1.8 ms'],
    [8, '2.1 ms'],
    [9, '2.5 ms'],
    [10, '3.0 ms'],
    [11, '3.5 ms'],
    [12, '4.0 ms'],
    [13, '4.7 ms'],
    [14, '5.5 ms'],
    [15, '6.3 ms'],
    [16, '7.3 ms'],
    [17, '8.4 ms'],
    [18, '9.7 ms'],
    [19, '11 ms'],
    [20, '13 ms'],
    [21, '14 ms'],
    [22, '16 ms'],
    [23, '19 ms'],
    [24, '21 ms'],
    [25, '24 ms'],
    [26, '27 ms'],
    [27, '31 ms'],
    [28, '34 ms'],
    [29, '39 ms'],
    [30, '43 ms'],
    [31, '49 ms'],
    [32, '54 ms'],
    [33, '61 ms'],
    [34, '68 ms'],
    [35, '75 ms'],
    [36, '84 ms'],
    [37, '93 ms'],
    [38, '103 ms'],
    [39, '114 ms'],
    [40, '126 ms'],
    [41, '139 ms'],
    [42, '153 ms'],
    [43, '169 ms'],
    [44, '186 ms'],
    [45, '204 ms'],
    [46, '224 ms'],
    [47, '246 ms'],
    [48, '269 ms'],
    [49, '295 ms'],
    [50, '322 ms'],
    [51, '352 ms'],
    [52, '384 ms'],
    [53, '419 ms'],
    [54, '456 ms'],
    [55, '496 ms'],
    [56, '540 ms'],
    [57, '586 ms'],
    [58, '636 ms'],
    [59, '690 ms'],
    [60, '748 ms'],
    [61, '810 ms'],
    [62, '876 ms'],
    [63, '947 ms'],
    [64, '1.02 s'],
    [65, '1.10 s'],
    [66, '1.19 s'],
    [67, '1.28 s'],
    [68, '1.38 s'],
    [69, '1.49 s'],
    [70, '1.60 s'],
    [71, '1.72 s'],
    [72, '1.85 s'],
    [73, '1.99 s'],
    [74, '2.13 s'],
    [75, '2.28 s'],
    [76, '2.45 s'],
    [77, '2.62 s'],
    [78, '2.81 s'],
    [79, '3.00 s'],
    [80, '3.21 s'],
    [81, '3.43 s'],
    [82, '3.66 s'],
    [83, '3.91 s'],
    [84, '4.17 s'],
    [85, '4.45 s'],
    [86, '4.74 s'],
    [87, '5.05 s'],
    [88, '5.37 s'],
    [89, '5.72 s'],
    [90, '6.08 s'],
    [91, '6.47 s'],
    [92, '6.87 s'],
    [93, '7.30 s'],
    [94, '7.75 s'],
    [95, '8.22 s'],
    [96, '8.72 s'],
    [97, '9.25 s'],
    [98, '9.80 s'],
    [99, '10 s'],
    [100, '11 s'],
    [101, '12 s'],
    [102, '12 s'],
    [103, '13 s'],
    [104, '14 s'],
    [105, '15 s'],
    [106, '15 s'],
    [107, '16 s'],
    [108, '17 s'],
    [109, '18 s'],
    [110, '19 s'],
    [111, '20 s'],
    [112, '21 s'],
    [113, '22 s'],
    [114, '24 s'],
    [115, '25 s'],
    [116, '26 s'],
    [117, '27 s'],
    [118, '29 s'],
    [119, '30 s'],
    [120, '32 s'],
    [121, '34 s'],
    [122, '35 s'],
    [123, '37 s'],
    [124, '39 s'],
    [125, '41 s'],
    [126, '43 s'],
    [127, '45 s'],
]);

const synthEnvDecayOrReleaseMap = new Map([
    [0, '3.0 ms'],
    [1, '3.5 ms'],
    [2, '4.0 ms'],
    [3, '4.6 ms'],
    [4, '5.3 ms'],
    [5, '6.0 ms'],
    [6, '6.9 ms'],
    [7, '7.9 ms'],
    [8, '9.0 ms'],
    [9, '10 ms'],
    [10, '12 ms'],
    [11, '13 ms'],
    [12, '15 ms'],
    [13, '17 ms'],
    [14, '19 ms'],
    [15, '21 ms'],
    [16, '23 ms'],
    [17, '26 ms'],
    [18, '29 ms'],
    [19, '33 ms'],
    [20, '36 ms'],
    [21, '41 ms'],
    [22, '45 ms'],
    [23, '50 ms'],
    [24, '55 ms'],
    [25, '61 ms'],
    [26, '68 ms'],
    [27, '75 ms'],
    [28, '82 ms'],
    [29, '91 ms'],
    [30, '100 ms'],
    [31, '110 ms'],
    [32, '120 ms'],
    [33, '132 ms'],
    [34, '144 ms'],
    [35, '158 ms'],
    [36, '173 ms'],
    [37, '188 ms'],
    [38, '206 ms'],
    [39, '224 ms'],
    [40, '244 ms'],
    [41, '265 ms'],
    [42, '288 ms'],
    [43, '313 ms'],
    [44, '340 ms'],
    [45, '368 ms'],
    [46, '399 ms'],
    [47, '432 ms'],
    [48, '467 ms'],
    [49, '505 ms'],
    [50, '545 ms'],
    [51, '588 ms'],
    [52, '634 ms'],
    [53, '683 ms'],
    [54, '736 ms'],
    [55, '792 ms'],
    [56, '851 ms'],
    [57, '915 ms'],
    [58, '983 ms'],
    [59, '1.05 s'],
    [60, '1.13 s'],
    [61, '1.21 s'],
    [62, '1.30 s'],
    [63, '1.39 s'],
    [64, '1.49 s'],
    [65, '1.59 s'],
    [66, '1.70 s'],
    [67, '1.82 s'],
    [68, '1.94 s'],
    [69, '2.07 s'],
    [70, '2.21 s'],
    [71, '2.36 s'],
    [72, '2.51 s'],
    [73, '2.67 s'],
    [74, '2.85 s'],
    [75, '3.03 s'],
    [76, '3.22 s'],
    [77, '3.42 s'],
    [78, '3.64 s'],
    [79, '3.86 s'],
    [80, '4.10 s'],
    [81, '4.35 s'],
    [82, '4.61 s'],
    [83, '4.89 s'],
    [84, '5.18 s'],
    [85, '5.49 s'],
    [86, '5.81 s'],
    [87, '6.15 s'],
    [88, '6.50 s'],
    [89, '6.88 s'],
    [90, '7.27 s'],
    [91, '7.68 s'],
    [92, '8.11 s'],
    [93, '8.57 s'],
    [94, '9.04 s'],
    [95, '9.54 s'],
    [96, '10 s'],
    [97, '11 s'],
    [98, '11 s'],
    [99, '12 s'],
    [100, '12 s'],
    [101, '13 s'],
    [102, '14 s'],
    [103, '14 s'],
    [104, '15 s'],
    [105, '16 s'],
    [106, '17 s'],
    [107, '18 s'],
    [108, '19 s'],
    [109, '20 s'],
    [110, '20 s'],
    [111, '22 s'],
    [112, '23 s'],
    [113, '24 s'],
    [114, '25 s'],
    [115, '26 s'],
    [116, '27 s'],
    [117, '29 s'],
    [118, '30 s'],
    [119, '31 s'],
    [120, '33 s'],
    [121, '34 s'],
    [122, '36 s'],
    [123, '38 s'],
    [124, '39 s'],
    [125, '41 s'],
    [126, '43 s'],
    [127, '45 s'],
]);

exports.synthEnvDecayOrReleaseLabel = function(value, type) {
    switch (type) {
        case 'mod.decay': {
            if (value === 127) return 'Sustain';
            else return synthEnvDecayOrReleaseMap.get(value);
        }
        case 'mod.release': {
            if (value === 127) return 'Inf';
            else return synthEnvDecayOrReleaseMap.get(value);
        }
        case 'amp.decay': {
            if (value === 127) return 'Sustain';
            else return synthEnvDecayOrReleaseMap.get(value);
        }
        case 'amp.release': {
            return synthEnvDecayOrReleaseMap.get(value);
        }
    }
    return "";
};

exports.synthAmpEnvelopeVelocityMap = new Map([
    [0, 'Off'],
    [1, '1'],
    [2, '2'],
    [3, '3'],
]);

exports.synthOscillatorsTypeMap = new Map([
    [0, 'None'],
    [1, '1 Pitch'],
    [2, '2 Shape'],
    [3, '3 Sync'],
    [4, '4 Detune'],
    [5, '5 MixSin'],
    [6, '6 MixTri'],
    [7, '7 MixSaw'],
    [8, '8 MixSqr'],
    [9, '9 MixBell'],
    [10, '10 MixNs1'],
    [11, '11 MixNs2'],
    [12, '12 FM1'],
    [13, '13 FM2'],
    [14, '14 RM'],
]);

/***
 * returns scaled value with precision and eng unit.
 * input: (0, 100, 127, 1, '%'), output '100.0 %'
 * input: (0, 100, 64, 1, '%'), output '50.0 %'
 * @param min: eng min value
 * @param max: eng max value
 * @param value: midi input value (0-127)
 * @param precision: number of decimal
 * @param unit: eng unit
 * @returns {string}
 */
exports.midi2LinearValue = function (min, max, value, precision, unit) {
    // midi 0 = min
    // midi 127 = max
    if (unit === "dB" && value === 0) {
        return "Off";
    }
    const result = (value * (max - min) / 127) + min;
    const str = round(result, precision).toFixed(precision);
    return (unit) ? str + " " + unit: str;
}

/***
 * returns value and complement, range 0/100
 * (used for mix oscillator config)
 * input: 0, output 100/0
 * input: 127, output 0/100
 * @param value midi value (0-127)
 * @returns {string}
 */
exports.midi2LinearValueAndComplement = function (value) {
    const result = value * 100 / 127;
    const val1 = round(result, 0);
    const val2 = 100 - val1;
    return val2.toFixed(0) + "/" + val1.toFixed(0);
}

exports.midi2LogValue = function (min, max, value, precision, unit) {
    if (unit === "dB" && value === 0) {
        if (value === 0) return "Off";
        if (value === 127) return "O dB";
    }
    // https://stackoverflow.com/questions/19472747/convert-linear-scale-to-logarithmic
    const x0 = 0;   // midi min value
    const x1 = 127; // midi max value
    const x = value;
    const y0 = min === 0 ? 0.0001: min;
    const y1 = max === 0 ? 0.0001: max;
    const a = (x - x0) / (x1 - x0);
    const b = Math.log10(y1) - Math.log10(y0);
    const y = Math.pow(10, a * b + Math.log10(y0)) - 90;
    return round(y, precision).toFixed(precision) + " " + unit;

}

const round = function(value, precision) {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}



