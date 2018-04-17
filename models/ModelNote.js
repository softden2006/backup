/*
 * This model is a part of the ModelNote
 * Hasan Reza 2018-04-12;
 *
 */
module.exports = function (sequelize, DataTypes) {
    const ModelNote = sequelize.define('ModelNote', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        model_name: {
            type: DataTypes.ENUM('Lead', 'Contact', 'Company', 'Deal', 'Campaign'),
            allowNull: false
        },
        model_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        note_title: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        note_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        is_deleted: {
            type: DataTypes.TINYINT(1),
            allowNull: false,
            defaultValue: '0'
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        created_by: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        updated_by: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        deleted_by: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        }
    }, {
            tableName: 'crm_model_note'
        });

    ModelNote.associate = (models) => {

        ModelNote.hasMany(models.ModelNoteAttachment, {
            foreignKey: {
                name: 'id_crm_model_note',
            }, onDelete: 'CASCADE'
        });

        // ModelNote.belongsTo(models.Lead, {
        //     foreignKey: 'model_id',
        //     constraints: false            
        // });

        // ModelNote.belongsTo(models.Contact, {
        //     foreignKey: 'model_id',
        //     constraints: false,
        //     as: 'contactNote'
        // });

        // ModelNote.belongsTo(models.Company, {
        //     foreignKey: 'model_id',
        //     constraints: false,
        //     as: 'companyNote'
        // });

        // ModelNote.belongsTo(models.Deal, {
        //     foreignKey: 'model_id',
        //     constraints: false,
        //     as: 'dealNote'
        // });

        // ModelNote.belongsTo(models.Campaign, {
        //     foreignKey: 'model_id',
        //     constraints: false,
        //     as: 'campaignNote'
        // });

    }
    return ModelNote;
};