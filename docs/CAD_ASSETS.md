# 3D model assets

The portfolio now reads models directly from `public/assets/cad/`, matching the structure of the Tirare pitch project. Do not put the models in `public/models/`; that legacy folder is no longer used.

## Required / featured model paths

| Website slot | File to add | Purpose |
|---|---|---|
| Hero MRII view | `public/assets/cad/mrii-interface-detail.glb` | MRII interface detail model |
| Tirare current system | `public/assets/cad/current-platform.glb` | Current Tirare platform |
| Design stage 01 | `public/assets/cad/reality.glb` | Reference cargo tricycle |
| Design stage 02 | `public/assets/cad/first-attempt.glb` | First power-delivery attempt |
| Design stage 03 | `public/assets/cad/constraint-collision.glb` | Constraint collision / revised concept |
| Design stage 04 | `public/assets/cad/current-platform.glb` | Current platform |
| Existing vehicle | `public/assets/cad/wooden-trike.glb` | Wooden cargo tricycle |
| Comparison vehicle | `public/assets/cad/metal-trike.glb` | Steel-frame cargo tricycle |

All models are loaded from the local public paths above. The website shows an explicit labelled placeholder when a file has not yet been added; it does not substitute an unverified external model.

## Before publishing

Inspect every export for patent-sensitive dimensions, internal geometry, tolerances, materials, hidden components and details that should not be disclosed. A model viewer makes geometry inspectable by anyone; publish only approved, public-safe GLBs. CAD communicates design intent and is not proof of manufacturing readiness, safety or vehicle-level validation.
