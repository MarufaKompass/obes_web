import overWeight from "../../../public/images/home/overWeight.png";
import {CheckCircle} from "lucide-react";
export default function Health() {
  return (
    <section className="w-full py-24 bg-muted ">
      <div className="md:container mx-auto px-4 md:px-6">
        <div className="grid gap-20 lg:grid-cols-2  h-full">
          {/* Image */}
          <img
            src={overWeight}
            alt="Modern medical facility"
            className="w-[90%] "
          />
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-[22px] font-semibold tracking-tighter md:text-4xl font-[poppins]" >A Medical Condition, Not a Choice</h2>
            <p className="text-muted-foreground md:text-[16px] font-[poppins]" >
              Obesity affects over 650 million adults worldwide and is recognized by medical organizations as a
              chronic disease requiring professional treatment and ongoing management.
            </p>
            <ul className="grid gap-2">
              {[
                'Evidence-based treatment approaches',
                'Personalized care plans',
                'Long-term support and monitoring',

              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          
          </div>
        </div>
      </div>
    </section>
  )
}
