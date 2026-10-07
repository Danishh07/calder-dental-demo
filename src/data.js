export const links = [['#treatments', 'Treatments'], ['#preview', 'Smile preview'], ['#process', 'Process'], ['#doctor', 'Dr. Calder'], ['#cost', 'Cost']]
export const treatments = [
  ['Porcelain veneers', 'Thin, custom ceramic shells to refine shape, shade and worn edges.', '3 to 4 visits', 'From $1,400 per tooth'],
  ['Whitening', 'A supervised 90-minute session to lift stains without changing tooth shape.', '1 visit', 'From $450'],
  ['Clear aligners', 'Removable trays to move crowded or spaced teeth, checked every 6 to 8 weeks.', '6 to 14 months', 'From $4,200'],
  ['Bonding and contouring', 'Tooth-colored resin and precise reshaping for small chips and uneven edges.', '1 visit', 'From $350 per tooth'],
]
export const steps = (code) => [
  ['01 / 45 minutes', 'Consult and scan', 'We examine your teeth and gums, discuss what you want to change and take a 3D scan. No preparation at this visit.'],
  ['02 / 60 minutes', 'Smile preview', `Review the digital design and try a removable mock-up. We agree on shape, ${code} or another shade, and a written estimate.`],
  ['03 / 90 to 120 minutes', 'Preparation', 'With local anesthetic, we prepare only the enamel needed and fit temporary veneers. The lab crafts your ceramic over 2 to 3 weeks.'],
  ['04 / 90 minutes', 'Final placement', 'Check the color and fit together before bonding. We adjust your bite and see you for a 20-minute review two weeks later.'],
]
export const cost = [
  ['Consultation and 3D scan', 'Credited to treatment', '$150'],
  ['Porcelain veneers', 'Per tooth', 'From $1,400'],
  ['Whitening', 'One 90-minute visit', 'From $450'],
  ['Clear aligners', 'Includes planned review visits', 'From $4,200'],
  ['Bonding and contouring', 'Per tooth', 'From $350'],
]
export const faq = (code) => [
  ['Does it hurt?', 'Scans and previews need no anesthetic. For veneer preparation we numb the area first. Mild sensitivity can last a few days; call us if it persists or your bite feels off.'],
  ['How long do veneers last?', 'With good care, ceramic veneers commonly last 10 years or more. We check them at every visit and fit a night guard if you grind your teeth.'],
  ['Will it look natural?', `We design around your face, existing teeth and how you speak. You review a digital preview and temporary mock-up before preparation. ${code} is a starting point; we choose the final shade together.`],
  ['Can I pay monthly?', 'Yes. Monthly plans are offered through an independent financing partner, subject to approval. We explain the term, APR and total cost before you decide.'],
]
