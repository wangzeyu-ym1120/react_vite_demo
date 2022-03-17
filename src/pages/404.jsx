import styled from 'styled-components'

export default function Home() {
  const Text = styled.div`
    display: flex;
    height: 100vh;
    font-size: 40px;
    align-items: center;
    justify-content: center;
  `
  return (
    <div>
      <Text>
        404 NOT FOUND
      </Text>
    </div>
  )
}

