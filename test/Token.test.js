const Token = artifacts.require('./Token')

require('chai')
.use(require('chai-as-promised'))
.should()

contract('Token', (accounts) => {
    let token

    beforeEach(async () => {
        token = await Token.new()
    })

    describe('deployment', () => {
        it('tracks the name', async () => {
            const result = await token.name()
            result.should.equal('Phuong Token')
            console.log('name public: ', result)
        })
    })
})