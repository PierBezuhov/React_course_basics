function PetInfo(props) {
  const { animal, age } = props

  return (
    <h1>
      My {animal} is {age} years old.
    </h1>
  )
}

export default PetInfo
