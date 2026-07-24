---
title: Modular RC Platform
category: Vorago
status: In development
summary: A modular RC chassis platform where the drivetrain, suspension, and electronics bay can be swapped between builds, designed to test how far a single mechanical interface standard can be pushed across different vehicle types.
technologies: [CAD, 3D printing, Electronics, Motion control, Fabrication]
role: Design, prototyping & testing
domain: Mechanical · electronics
year: '2025'
date: 2025-03-01
coverImage: /images/projects/modular-rc-platform/cover.svg
draft: false
---

## Overview

A personal project exploring whether a single modular chassis platform can support
several different RC vehicle types -- a rock crawler, a short-course truck, and a
buggy -- by standardising the mechanical and electrical interfaces between the
chassis tub, suspension modules, and drivetrain, instead of designing a new frame
for every build.

## The problem

Every RC project I had built before this one started from a blank sheet: a new
chassis, a new suspension geometry, a new wiring layout. That is fine for a single
build, but it meant none of the mechanical design work carried over, and testing one
subsystem (say, a new suspension geometry) always meant rebuilding an entire vehicle
around it. I wanted a platform where I could change one module -- suspension,
drivetrain, electronics bay -- and keep everything else constant, so a test actually
isolates the thing being tested.

## Requirements and constraints

- A common chassis-to-module interface that works for at least three suspension
  geometries (solid axle, independent double-wishbone, trailing arm) without
  redesigning the tub
- Modules removable and swappable in under 15 minutes with hand tools only
- Total platform mass budget comparable to an equivalent non-modular RC chassis of
  the same scale (no more than a ~12% mass penalty for the added interface hardware)
- Printable on a standard FDM printer with a 220 x 220 mm bed, no part requiring
  supports on a critical mating face
- Off-the-shelf RC electronics (standard servo, brushed motor, generic ESC) so the
  platform stays usable without custom electronics

## System breakdown

- **Mechanical structure and mechanisms** -- chassis tub, module interface plates,
  suspension geometry per module, drivetrain module (motor mount, gearbox, diff
  carrier)
- **Electronics and control** -- battery tray and standard connector layout shared
  across modules, ESC/receiver bay isolated from the drivetrain module so it never
  has to be rewired between swaps
- **Software and logic** -- none on the vehicle itself; a small spreadsheet-based
  tool (built while learning Python fundamentals) checks gear ratio, wheel speed,
  and estimated torque for a given motor/pinion/spur combination before I commit to
  printing a drivetrain module
- **User interaction and maintenance** -- module retention uses two captive M3
  screws per interface, deliberately chosen over quick-release clips after the first
  prototype's clips wore out within a few swap cycles

## Concepts considered

Three interface concepts were compared before settling on a flat bolted plate:

- **Dovetail slide interface** -- fast to swap, no tools needed, but play developed
  in the slide after printing tolerance and PLA creep, which showed up as suspension
  geometry drift under load
- **Quick-release pin + clip** -- fastest option, but the clips were the weakest
  point in testing and the first thing to fail
- **Bolted flat interface (chosen)** -- slower to swap than the alternatives, but
  zero play once torqued, predictable stiffness, and easy to reprint if a mating
  face wears

The bolted interface traded swap speed for repeatability, which mattered more once
it became clear that geometry drift was invalidating suspension comparisons between
builds.

## Design and development

The chassis tub was developed around a fixed bolt-circle interface at the front and
rear, with the interface plate treated as its own design domain -- as long as a
module presents the correct bolt pattern and load path, its internal geometry is
free to change completely. This let the three suspension geometries be developed
independently without touching the tub design once the interface was frozen.

## CAD, calculations, or technical work

Suspension geometry was modelled and swept through the intended travel range in CAD
to check for interference against the tub and adjacent modules before printing.
Interface plate thickness was sized from an estimated worst-case landing-impact load
with a conservative safety factor, since FDM parts fail in ways that are harder to
predict than machined aluminium. Drivetrain ratios were checked against the target
wheel speed and estimated motor torque using the spreadsheet tool mentioned above
before committing a gearbox module to print.

## Prototype or implementation

Printed in PETG for structural modules (tub, interface plates, suspension arms) and
PLA for low-load covers and brackets. First full rolling chassis combined the
solid-axle suspension module with the drivetrain module to validate the interface
under real driving loads before the other two suspension geometries were built.

## Testing and observations

- Interface plates held zero measurable play after 30+ swap cycles, confirmed by
  checking ride height and toe consistency between swaps
- The bolted interface added roughly 9% mass versus an estimated equivalent
  non-modular chassis, inside the 12% budget
- Swap time settled around 11 minutes once a fixed screw-torquing sequence was
  established, under the 15-minute target
- Independent double-wishbone module showed more flex under hard landings than
  expected from the CAD sweep alone -- see iterations below

## Problems and iterations

The first suspension arm design flexed visibly under hard landings even though the
CAD interference check had looked fine, because the check only validated geometry,
not stiffness. The arm was redesigned with a wider cross-section and internal
ribbing rather than a solid wall increase, which solved the flex without blowing
through the mass budget. This was the main lesson that shaped the CAD process for
the remaining modules: a geometry sweep is not a substitute for a stiffness check.

## Final outcome

The platform currently supports two of the three planned suspension geometries
(solid axle and independent double-wishbone) on a shared tub and drivetrain module,
meeting the swap-time, play, and mass-budget requirements. The trailing-arm module
is the next one in the queue.

## Lessons learned

- A geometry sweep in CAD tells you parts do not collide -- it does not tell you
  they will not flex
- Designing the interface as its own domain, separate from what is attached to it,
  made the rest of the platform genuinely modular instead of modular in name only
- Bolted interfaces cost time at swap but bought back far more time in trustworthy,
  repeatable testing
- Building the ratio/torque check as a small reusable tool paid for itself after the
  second drivetrain module

## Next steps

- Design and print the trailing-arm suspension module
- Move interface plate sizing from a hand safety-factor estimate to a proper FEA
  check now that failure loads are better understood from testing
- Document the bolt-circle interface standard so future modules (a winch mount, a
  camera pod) can be designed against a fixed spec instead of re-measuring the tub
