module.exports = [
    {
        name: "TSL2561",
        blocks: [
            {
                xml:
                    `<block type="tsl2561">
                        <value name="TSL2561SDA">
                            <shadow type="math_number">
                                <field name="NUM">21</field>
                            </shadow>
                        </value>
                        <value name="TSL2561SCL">
                            <shadow type="math_number">
                                <field name="NUM">22</field>
                            </shadow>
                        </value>
                     </block>
                     <block type="tsl2561getlux">
                     </block>`
            }
        ]
    }
];