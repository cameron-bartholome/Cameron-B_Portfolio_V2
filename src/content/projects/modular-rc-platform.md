---
title: Eleanor RC Platform
category: Vorago
status: In development
summary: A personal modular RC chassis project for a high-performance Eleanor-inspired car, focused on the mechanical platform, chassis layout and component packaging.
technologies: [CAD, 3D printing, Electronics, Motion control, Fabrication]
role: Design, prototyping & testing
domain: Mechanical · electronics
year: '2026'
date: 2025-03-01
coverImage: /images/projects/modular-rc-platform/cover.png
draft: false
---

## 01 Overview

This is an ongoing personal project to design and build a large-scale, high-performance RC car from the ground up. The main focus is the mechanical platform and chassis layout rather than the Eleanor-inspired body. I am keeping the body separate so the suspension, drivetrain, electronics and frame can change without forcing a new body every time.

The car is currently being designed around roughly 1:8 scale, with the possibility of moving toward a larger 1:7 scale so there is enough room for batteries, motor, drivetrain, steering components, electronics, cooling and structural supports.

## 02 The problem

An earlier version of the platform used a mix of 1:10 and 1:8 proportions. As more components were added, the chassis became too cramped and the internal layout did not have enough room for the planned battery packs, motor, ESC, steering servo and electronics. Instead of forcing everything into that original design, I am redesigning the main frame and increasing its size so the mechanical packaging makes sense.

## 03 Requirements and constraints

- Keep the body separate from the mechanical chassis so the drivetrain, suspension, frame and electronics can change without requiring a new body.
- Aim for a 4WD layout with the motor, ESC, receiver, servo and battery packs packaged neatly in the chassis.
- Plan for a large-scale platform around 1:8, with the option to move to 1:7 if the component volume demands it.
- Use custom wheels and cast polyurethane tyres, understanding the wheel design, tyre moulds, tread, width, sidewall shape and hardness may all change during testing.
- Make the chassis modular where practical, with separate front, centre and rear sections to make printing, repair, modification and replacement easier.
- Use materials like PETG for general prototypes, reinforced plastics for stressed parts, TPU for flexible printed pieces and cast polyurethane for tyres.
- Assume the platform will need metal or composite reinforcement where printed material alone is not stiff enough.

## 04 System breakdown

<div class="system-breakdown">
  <div class="system-breakdown-row">
    <div class="system-breakdown-term">Mechanical chassis</div>
    <div class="system-breakdown-desc">Separate front, centre and rear sections with a shared interface philosophy to support future iterations.</div>
  </div>
  <div class="system-breakdown-row">
    <div class="system-breakdown-term">Drivetrain</div>
    <div class="system-breakdown-desc">A planned 4WD layout with motor, gearbox, shafts and diffs arranged to fit the available packaging volume.</div>
  </div>
  <div class="system-breakdown-row">
    <div class="system-breakdown-term">Suspension</div>
    <div class="system-breakdown-desc">Mounting points and geometry are being planned so the body can stay separate from the chassis modules.</div>
  </div>
  <div class="system-breakdown-row">
    <div class="system-breakdown-term">Electronics bay</div>
    <div class="system-breakdown-desc">A dedicated area for the ESC, receiver, battery packs and steering servo that can be changed without redesigning the whole vehicle.</div>
  </div>
  <div class="system-breakdown-row">
    <div class="system-breakdown-term">Wheels and tyres</div>
    <div class="system-breakdown-desc">Custom-designed wheels plus polyurethane cast tyres that can be adjusted for tread, width, sidewall shape and hardness.</div>
  </div>
</div>

## 05 Concepts considered

I have been weighing a few key concepts while refining the layout:

- Keep the chassis modular in sections so I can change the front, centre or rear independently instead of printing one huge tub.
- Treat the body as an overlay rather than a structural element, so changes in suspension or drivetrain do not force a body redesign.
- Use a 4WD drivetrain layout that balances packaging and serviceability, while leaving room for cooling and wiring.
- Choose a scale based on actual component space rather than a nominal label, because the batteries, electronics and motor all take more room than expected.

## 06 Design and development

The current design work is focused on increasing and refining the main chassis size, deciding between a final 1:8 or 1:7 scale, and creating enough internal space for the batteries and electronics. I am planning the drivetrain layout and the position of the motor, ESC, receiver, servo and battery packs. At the same time, I am working on the front, centre and rear chassis sections and checking that the Eleanor-inspired body can still fit the updated mechanical platform.

## 07 CAD, calculations, or technical work

The CAD work has been used to check component fit and internal packaging, not to claim any completed prototype results. I have been laying out the battery packs, motor, ESC and steering components in the model and checking clearances for the drivetrain and suspension. Simple gear ratio calculations are part of the process, especially when considering the future top speed target and the expected wheel size from the custom wheels.

Possible materials are being considered alongside the CAD work: PETG for general prototypes, PAHT-CF or similar reinforced materials for highly stressed parts, TPU for flexible printed components, and cast polyurethane for the tyres. I am also thinking about where carbon-fibre rods, plates or aluminium reinforcement may be needed if printed material alone is not stiff enough.

## 08 Prototype or implementation

The project is still in progress, so there is no finished prototype yet. I have been iterating the chassis volume and making the mechanical layout more realistic. The goal is to get a complete rolling chassis that can steer and drive at low speed before moving toward any high-speed testing.

## 09 Testing and observations

Full testing has not started yet. The plan is to test:

- chassis flex and twisting
- drivetrain alignment
- gear and shaft movement
- motor temperature
- ESC temperature
- battery temperature
- steering response
- suspension movement
- tyre grip and tyre expansion or deformation
- braking performance
- straight-line stability
- vibration
- weight distribution
- ease of maintenance
- accessibility of the electronics
- low-speed testing before any high-speed runs

Those are the observations I want to collect once a physical prototype reaches the testing stage.

## 10 Problems and iterations

The main issue identified so far was that the earlier chassis was too small and cramped for the planned components. Rather than trying to force everything into the original design, I decided to increase the size and rethink the internal layout. That change has become the main iteration direction. Additional issues will be documented as physical prototypes are built and tested.

## 11 Final outcome

There is no final outcome yet because the project is still being developed. The current outcome is a clearer overall vehicle layout, a better understanding of the required scale, and a more realistic plan for packaging the drivetrain, batteries, electronics, suspension and body.

## 12 Lessons learned

- Internal components must be considered before finalising the exterior dimensions.
- A scale label does not always reflect the actual space required.
- Increasing the size can create a cleaner and more practical design.
- Modular construction should make experimental parts easier to replace.
- High-speed goals affect the complete vehicle, not only the motor.
- The body and chassis should be designed together but kept as separate systems.
- CAD packaging is important, but physical prototypes will still reveal problems.
- Stronger materials and reinforcement may be needed in areas where drivetrain alignment is critical.

## 13 Next steps

- Finalise whether the vehicle stays at 1:8 or moves toward 1:7 scale based on component volume.
- Continue refining the front, centre and rear chassis sections.
- Finalise the 4WD drivetrain layout and the position of the motor, ESC, receiver, servo and battery packs.
- Continue custom wheel and polyurethane tyre development.
- Check that the Eleanor-inspired body still fits the updated mechanical platform.
- Work toward a complete rolling chassis that can steer and drive at low speed before any high-speed testing begins.

## 14 Related projects

- Custom RC wheels and polyurethane tyres
- Suspension learning model
- Experimental fail-safe braking system
- Future custom RC controller with a display and vehicle information
- Eleanor-inspired body and panel development
