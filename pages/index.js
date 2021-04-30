import AsyncApiComponent from '@asyncapi/react-component'

export default function IndexPage() {
  return (
    <AsyncApiComponent
      schema={{
        url:
          'https://raw.githubusercontent.com/asyncapi/asyncapi/master/examples/2.0.0/streetlights.yml',
      }}
    />
  )
}
