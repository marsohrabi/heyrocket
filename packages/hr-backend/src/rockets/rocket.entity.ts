import {
    Column,
    DataType,
    Model,
    Table
} from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: "rockets",
    underscored: true,
    indexes: [
        { unique: true, fields: ["id"] },
        {
            name: "filter",
            fields: ["fk_dealership_id"],
            unique: false,
        },
    ],
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
})

export class RocketEntity extends Model<RocketEntity> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    })
    readonly id: number;

    @Column({ type: DataType.STRING, allowNull: false, field: "stock_number" })
    readonly stockNumber: string;
}
