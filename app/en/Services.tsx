export const Services = () => {
  return (
    <section className="flex flex-col">
      <p className="pb-3 text-center text-3xl font-bold">Our Services</p>
      <div className="flex flex-row flex-wrap content-around items-stretch justify-center gap-4 md:gap-10">
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Radiographic Testing</p>
          <p>
            Radiographic Testing (RT) uses X-ray radiation to inspect the
            internal parts of materials, structures, and welds. It assists in
            quality control, defect detection, and safety assessment of
            materials and structural components in various industries. The
            method effectively detects volumetric discontinuities, cracks, and
            structural variations. Qualified material testing professionals
            perform these inspections while minimizing the risks associated with
            radiation exposure by adhering to safety regulations.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Liquid Penetrant Testing</p>
          <p>
            Liquid Penetrant Testing (PT) is a non-destructive testing method
            primarily used to detect surface-breaking cracks, material
            discontinuities, or fatigue in materials. In this test, a liquid
            penetrant is applied to the surface under examination, then removed
            and treated with a developer. The surface is then inspected, and
            indications such as filled-in cracks or defects highlighted by the
            developer can be easily detected.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Magnetic Particle Testing</p>
          <p>
            Magnetic Particle Testing (MT) is a non-destructive testing method
            used to detect surface or near-surface discontinuities, material
            discontinuities, or cracks caused by material fatigue in metals.
            During the test, the magnetic particles align to form visible
            indications of linear defects under the influence of a magnetic
            field.{" "}
            {/* A magnetic material in powder form is applied to the surface under examination, and then the surface is examined using specialized tools to identify cracks or defects filled with the magnetic powder. */}
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Ultrasonic Testing</p>
          <p>
            Ultrasonic Testing (UT) is an imaging technique that uses ultrasonic
            waves to examine the internal structure of an object. It provides
            detailed images of internal discontinuities in materials, structural
            elements, and welds, allowing for the detection of deviations or
            abnormalities.{" "}
            {/* It can be used to obtain detailed images of organs, tissues, and organ systems, enabling the identification of anomalies or abnormalities. */}
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Visual Testing</p>
          <p>
            Visual Testing (VT) is a visual inspection procedure in which the
            examiner visually examines surfaces, components, or structures with
            the naked eye. This procedure helps in identifying visible defects,
            damages, or deformations in materials or structures.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Leak Testing</p>
          <p>
            Leak Testing (LT) is a material testing method used to verify the
            tightness of structures or components. This procedure helps in
            detecting leaks, cracks, or other material defects in the tested
            component or structure.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Coating Inspection</p>
          <p>
            Coating Inspection (IT), also known as holiday testing, is a
            procedure that checks the integrity of coatings on metal surfaces.
            During the inspection, the coating on metal surfaces is examined
            using special tools, and any visible electric arcs indicate damage
            to the coating's insulation.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Hardness Testing</p>
          <p>
            Hardness Testing (HT) is a procedure used to measure the hardness of
            metals or other materials. During the test, the resistance of the
            material to indentation is measured using specialized instruments,
            and the degree of indentation provides information about the
            material's hardness.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Positive Material Identification</p>
          <p>
            Positive Material Identification (PMI) is a procedure used to
            identify materials or components based on their composition. The
            process involves analysis to determine the chemical elements and
            constituents present in the materials, thereby determining the
            composition of the tested material.
          </p>
        </div>
      </div>
    </section>
  );
};
