## Modules

<dl>
<dt><a href="#module_NS2 Piano On">NS2 Piano On</a></dt>
<dd><p>Offset in file: 0x48 (b7)</p>
</dd>
<dt><a href="#module_NS2 Piano Kb Zone">NS2 Piano Kb Zone</a></dt>
<dd><p>Offset in file: 0x4C (b7-5)</p>
</dd>
<dt><a href="#module_NS2 Piano Volume">NS2 Piano Volume</a></dt>
<dd><p>Offset in file: 0x4B (b6-0)</p>
</dd>
<dt><a href="#module_NS2 Piano Octave Shift">NS2 Piano Octave Shift</a></dt>
<dd><p>Offset in file: 0x4C (b4-1)</p>
</dd>
<dt><a href="#module_NS2 Piano Pitch Stick">NS2 Piano Pitch Stick</a></dt>
<dd><p>Offset in file: 0x4C (b0)</p>
</dd>
<dt><a href="#module_NS2 Piano Sustain Pedal">NS2 Piano Sustain Pedal</a></dt>
<dd><p>Offset in file: 0x4D (b7)</p>
</dd>
<dt><a href="#module_NS2 Piano Latch Pedal">NS2 Piano Latch Pedal</a></dt>
<dd><p>Offset in file: 0x5A (b7)</p>
</dd>
<dt><a href="#module_NS2 Piano Kb Gate">NS2 Piano Kb Gate</a></dt>
<dd><p>Offset in file: 0x5A (b6)</p>
</dd>
<dt><a href="#module_NS2 Piano Type">NS2 Piano Type</a></dt>
<dd><p>Offset in file: 0xCD (b7-5)</p>
</dd>
<dt><a href="#module_NS2 Piano Sample ID">NS2 Piano Sample ID</a></dt>
<dd><p>Offset in file: 0xD0 (b5-0), 0xD1/0xD3 (b7-0), and 0xD4 (b7-6)</p>
</dd>
<dt><a href="#module_NS2 Piano Slot Detune">NS2 Piano Slot Detune</a></dt>
<dd><p>Offset in file: 0x3B (b7-5)</p>
</dd>
<dt><a href="#module_NS2 Piano Long Release">NS2 Piano Long Release</a></dt>
<dd><p>Offset in file: 0xCF (b6)</p>
</dd>
<dt><a href="#module_NS2 Piano String Resonance">NS2 Piano String Resonance</a></dt>
<dd><p>Offset in file: 0xCF (b5)</p>
</dd>
<dt><a href="#module_NS2 Piano Pedal Noise">NS2 Piano Pedal Noise</a></dt>
<dd><p>Offset in file: 0xCF (b4)</p>
</dd>
<dt><a href="#module_NS2 Piano Dynamics">NS2 Piano Dynamics</a></dt>
<dd><p>Offset in file: 0xCF (b3-2)</p>
</dd>
<dt><a href="#module_NS2 Piano Clavinet Model">NS2 Piano Clavinet Model</a></dt>
<dd><p>Offset in file: 0xCE (b0) and 0xCF (b7)</p>
</dd>
<dt><a href="#module_NS2 Piano Clavinet Eq Hi">NS2 Piano Clavinet Eq Hi</a></dt>
<dd><p>Offset in file: 0xCF (b1-0)</p>
</dd>
<dt><a href="#module_NS2 Piano Clavinet Eq">NS2 Piano Clavinet Eq</a></dt>
<dd><p>Offset in file: 0xD0 (b7-6)</p>
</dd>
<dt><a href="#module_NS2 File Version">NS2 File Version</a></dt>
<dd><p>Offset in file: 0x14 and 0x15</p>
</dd>
<dt><a href="#module_NS2 File Format">NS2 File Format</a></dt>
<dd><p>Offset in file: 0x04</p>
<p>0 = header type 0 - legacy mode no CRC (Byte 0x18 to 0x2B are missing)
1 = header type 1 - default mode with additional bytes 0x18 to 0x2B (20 bytes).</p>
</dd>
<dt><a href="#module_NS3 Transpose">NS3 Transpose</a></dt>
<dd><p>Offset in file: 0x38 (b7-3)</p>
<p>Enabled: 0x38 (b7)
Value: 0x38 (b6-3)</p>
</dd>
<dt><a href="#module_NS3 Split">NS3 Split</a></dt>
<dd><p>0ffset in file: 0x31 (b4 to b0) to 0x34 (b7 only)</p>
</dd>
<dt><a href="#module_NS3 Master Clock Rate">NS3 Master Clock Rate</a></dt>
<dd><p>Offset in file: 0x38 (b2-0) 0x39 (b7-3)</p>
</dd>
<dt><a href="#module_NS3 Dual Keyboard">NS3 Dual Keyboard</a></dt>
<dd><p>Offset in file 0x3A (b3)</p>
</dd>
<dt><a href="#module_NS2 Dual Keyboard Style">NS2 Dual Keyboard Style</a></dt>
<dd><p>Offset in file 0x3A (b1-0)</p>
</dd>
<dt><a href="#module_NS3 Panel Enabled And Selection">NS3 Panel Enabled And Selection</a></dt>
<dd><p>Offset in file 0x31</p>
</dd>
</dl>

<a name="module_NS2 Piano On"></a>

## NS2 Piano On
Offset in file: 0x48 (b7)

**Example**  
```js
O = off, 1 = on
```
<a name="module_NS2 Piano Kb Zone"></a>

## NS2 Piano Kb Zone
Offset in file: 0x4C (b7-5)

**Example**  
```js
0 = LO
```
<a name="module_NS2 Piano Volume"></a>

## NS2 Piano Volume
Offset in file: 0x4B (b6-0)

**Example**  
```js
Morph Wheel:
```
<a name="module_NS2 Piano Octave Shift"></a>

## NS2 Piano Octave Shift
Offset in file: 0x4C (b4-1)

**Example**  
```js
Octave Shift = value - 7
```
<a name="module_NS2 Piano Pitch Stick"></a>

## NS2 Piano Pitch Stick
Offset in file: 0x4C (b0)

**Example**  
```js
O = off, 1 = on
```
<a name="module_NS2 Piano Sustain Pedal"></a>

## NS2 Piano Sustain Pedal
Offset in file: 0x4D (b7)

**Example**  
```js
O = off, 1 = on
```
<a name="module_NS2 Piano Latch Pedal"></a>

## NS2 Piano Latch Pedal
Offset in file: 0x5A (b7)

**Example**  
```js
O = off, 1 = on
```
<a name="module_NS2 Piano Kb Gate"></a>

## NS2 Piano Kb Gate
Offset in file: 0x5A (b6)

**Example**  
```js
O = off, 1 = on
```
<a name="module_NS2 Piano Type"></a>

## NS2 Piano Type
Offset in file: 0xCD (b7-5)

**Example**  
```js
#include ns2PianoTypeMap
```
<a name="module_NS2 Piano Sample ID"></a>

## NS2 Piano Sample ID
Offset in file: 0xD0 (b5-0), 0xD1/0xD3 (b7-0), and 0xD4 (b7-6)

**Example**  
```js
32-bit Nord Sample ID
```
<a name="module_NS2 Piano Slot Detune"></a>

## NS2 Piano Slot Detune
Offset in file: 0x3B (b7-5)

**Example**  
```js
#include ns2PianoSlotDetuneMap
```
<a name="module_NS2 Piano Long Release"></a>

## NS2 Piano Long Release
Offset in file: 0xCF (b6)

**Example**  
```js
O = off, 1 = on
```
<a name="module_NS2 Piano String Resonance"></a>

## NS2 Piano String Resonance
Offset in file: 0xCF (b5)

**Example**  
```js
O = off, 1 = on
```
<a name="module_NS2 Piano Pedal Noise"></a>

## NS2 Piano Pedal Noise
Offset in file: 0xCF (b4)

**Example**  
```js
O = off, 1 = on
```
<a name="module_NS2 Piano Dynamics"></a>

## NS2 Piano Dynamics
Offset in file: 0xCF (b3-2)

**Example**  
```js
#include ns2PianoDynamicsMap
```
<a name="module_NS2 Piano Clavinet Model"></a>

## NS2 Piano Clavinet Model
Offset in file: 0xCE (b0) and 0xCF (b7)

**Example**  
```js
#include ns2PianoClavinetModelMap
```
<a name="module_NS2 Piano Clavinet Eq Hi"></a>

## NS2 Piano Clavinet Eq Hi
Offset in file: 0xCF (b1-0)

**Example**  
```js
#include ns2PianoClavinetEqHiMap
```
<a name="module_NS2 Piano Clavinet Eq"></a>

## NS2 Piano Clavinet Eq
Offset in file: 0xD0 (b7-6)

**Example**  
```js
#include ns2PianoClavinetEqMap
```
<a name="module_NS2 File Version"></a>

## NS2 File Version
Offset in file: 0x14 and 0x15

**Example**  
```js
16-bit integer value in Little Endian format
```
<a name="module_NS2 File Format"></a>

## NS2 File Format
Offset in file: 0x04

<a name="module_NS3 Transpose"></a>

## NS3 Transpose
Offset in file: 0x38 (b7-3)

**Example**  
```js
7xxx xxxx : Transpose Off/On
```
<a name="module_NS3 Split"></a>

## NS3 Split
0ffset in file: 0x31 (b4 to b0) to 0x34 (b7 only)

**Example**  
```js
|  0X31     |    0x32   |     0x33  |    0x34   | description
```
<a name="module_NS3 Master Clock Rate"></a>

## NS3 Master Clock Rate
Offset in file: 0x38 (b2-0) 0x39 (b7-3)

**Example**  
```js
bpm = value + 30
```
<a name="module_NS3 Dual Keyboard"></a>

## NS3 Dual Keyboard
Offset in file 0x3A (b3)

**Example**  
```js
0 = Off
```
<a name="module_NS2 Dual Keyboard Style"></a>

## NS2 Dual Keyboard Style
Offset in file 0x3A (b1-0)

**Example**  
```js
0 = Panel
```
<a name="module_NS3 Panel Enabled And Selection"></a>

## NS3 Panel Enabled And Selection
Offset in file 0x31

**Example**  
```js
Enabled (b6-5):
```